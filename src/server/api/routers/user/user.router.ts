import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

import { userRepository } from './repository/user.repository';

export const userRouter = createTRPCRouter({
  userById: protectedProcedure.query(async ({ ctx }) => {
    return userRepository.getUserById(ctx.session.user.id);
  }),
});
