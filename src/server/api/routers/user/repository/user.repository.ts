import { TRPCError } from '@trpc/server';
import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { UserSchema, type UserSchemaType } from '@/db/models/schema';
import { redis } from '@/db/redis';
import { Logger } from '@/server/api/common/logger';
import { type ServerSession } from '@/server/api/routers/auth/service/auth.service.types';
import {
  type GetUserByIdOptions,
  type UpsertUserParams,
} from '@/server/api/routers/user/repository/user.repository.types';

class UserRepository {
  private readonly logger = new Logger(UserRepository.name);

  private getUserInfoKey(userId: UserSchemaType['id']): string {
    return `user-info:${userId}`;
  }

  private async cacheUserInfo(user: ServerSession['user']): Promise<void> {
    const userKey = this.getUserInfoKey(user.id);
    await redis.set(
      userKey,
      JSON.stringify(user),
      'EX',
      60 * 60 * 24 * 7 // 7 days in seconds
    );
  }

  private async getCachedUserInfo(
    userId: ServerSession['user']['id']
  ): Promise<ServerSession['user'] | null> {
    const userKey = this.getUserInfoKey(userId);
    const cachedUserInfo = await redis.get(userKey);
    return cachedUserInfo !== null ? (JSON.parse(cachedUserInfo) as ServerSession['user']) : null;
  }

  public async getUserById<T extends boolean = false>(
    id: UserSchemaType['id'],
    options?: GetUserByIdOptions<T>
  ): Promise<(T extends true ? ServerSession['user'] : UserSchemaType) | null> {
    const { includeSensitiveInfo = false, bypassCache = false } = options ?? {};

    if (!bypassCache) {
      const cachedUserInfo = await this.getCachedUserInfo(id);
      if (cachedUserInfo !== null) {
        if (includeSensitiveInfo) return cachedUserInfo;

        return {
          id: cachedUserInfo.id,
          username: cachedUserInfo.username,
          password: cachedUserInfo.password,
          createdAt: cachedUserInfo.createdAt,
          updatedAt: cachedUserInfo.updatedAt,
        } satisfies UserSchemaType as T extends true ? ServerSession['user'] : UserSchemaType;
      }
    }

    const selectOptions = {
      id: UserSchema.id,
      username: UserSchema.username,
      createdAt: UserSchema.createdAt,
      updatedAt: UserSchema.updatedAt,
    };

    const selectSensitiveInfoOptions = {
      ...selectOptions,
      password: UserSchema.password,
    };

    const results = await db
      .select(includeSensitiveInfo ? selectSensitiveInfoOptions : selectOptions)
      .from(UserSchema)
      .where(eq(UserSchema.id, id));

    const userQuery = results[0] as T extends true ? ServerSession['user'] : UserSchemaType;
    if (userQuery !== undefined) {
      this.cacheUserInfo(userQuery);
    }
    return userQuery;
  }

  public async getUserByIdOrThrow<T extends boolean = false>(
    id: UserSchemaType['id'],
    options?: GetUserByIdOptions<T>
  ): Promise<T extends true ? ServerSession['user'] : UserSchemaType> {
    const user = await this.getUserById(id, options);
    if (user === null) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'User not found',
      });
    }
    return user;
  }

  public async upsertUser(data: UpsertUserParams): Promise<ServerSession['user'] | null> {
    try {
      const items = await db
        .insert(UserSchema)
        .values({
          id: crypto.randomUUID(),
          username: data.onCreate.username,
          password: data.onCreate.password,
        })
        .onConflictDoUpdate({
          target: UserSchema.username,
          set: {
            password: data.onUpdate.password,
          },
        })
        .returning({
          id: UserSchema.id,
          username: UserSchema.username,
          password: UserSchema.password,
          createdAt: UserSchema.createdAt,
          updatedAt: UserSchema.updatedAt,
        });

      const result = items[0];
      this.logger.info('Upserted user', result);

      if (result !== undefined) {
        this.cacheUserInfo(result);
      }

      return result ?? null;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error('Failed to upsert user', error);
      } else {
        this.logger.error('Failed to upsert user');
      }
      return null;
    }
  }
}

export const userRepository = new UserRepository();
