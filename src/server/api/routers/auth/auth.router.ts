import { TRPCError } from '@trpc/server';

import { Logger } from '@/server/api/common/logger';
import { type MeQueryResult } from '@/server/api/routers/auth/auth.types';
import { authService } from '@/server/api/routers/auth/service/auth.service';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc';

import { LoginInput } from './auth.input';
import type { ServerSession } from './service/auth.service.types';

export const authRouter = createTRPCRouter({
  signIn: publicProcedure
    .input(LoginInput)
    .mutation(async ({ input, ctx }): Promise<ServerSession> => {
      return authService.login({ input, headers: ctx.headers });
    }),

  me: protectedProcedure.query(async ({ ctx }): Promise<MeQueryResult> => {
    return {
      user: ctx.session.user,
    };
  }),

  signOut: protectedProcedure.mutation(async ({ ctx }) => {
    try {
      await authService.logout({
        session: ctx.session,
        headers: ctx.headers,
      });
    } catch (error: unknown) {
      Logger.error('Failed to logout', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to logout',
      });
    }
  }),

  signOutAllSessions: protectedProcedure.mutation(async ({ ctx }) => {
    try {
      await authService.removeAllSessions({ headers: ctx.headers, userId: ctx.session.user.id });
    } catch (error: unknown) {
      Logger.error('Failed to logout all sessions', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to logout all sessions',
      });
    }
  }),
});
