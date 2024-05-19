import { SendGroupInviteInput } from '@/server/api/routers/groups/sub-routers/group-invites/group-invites.input';
import { groupInvitesService } from '@/server/api/routers/groups/sub-routers/group-invites/service/group-invites.service';
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

export const groupInvitesRouter = createTRPCRouter({
  sendGroupInvite: protectedProcedure.input(SendGroupInviteInput).mutation(({ input, ctx }) => {
    return groupInvitesService.sendGroupInvite({
      input,
      session: ctx.session,
    });
  }),
});
