import type { UserSchemaType } from '@/db/models/schema';

export type GetUserByIdOptions<T extends boolean> = {
  includeSensitiveInfo?: T;
  bypassCache?: boolean;
};

export type UpsertUserParams = {
  onCreate: Pick<UserSchemaType, 'username' | 'password'>;
  onUpdate: Pick<UserSchemaType, 'username' | 'password'>;
};

export type UpdateUserPhoneNumParams = {
  userId: UserSchemaType['id'];
  phoneNumber: string;
};
