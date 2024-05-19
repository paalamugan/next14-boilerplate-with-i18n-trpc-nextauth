import { TRPCError } from '@trpc/server';

import { Logger } from '@/server/api/common/logger';
import { type AddPendingInviteArgs } from '@/server/api/routers/groups/sub-routers/group-invites/repository/group-invites.repository.types';

class GroupInvitesRepository {
  private readonly logger = new Logger(GroupInvitesRepository.name);

  public async addPendingInvite(_params: AddPendingInviteArgs): Promise<boolean> {
    try {
      return true;
    } catch (error) {
      if (error instanceof TRPCError) throw error;
      this.logger.error(error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to add or update pending invite',
      });
    }
  }
}

export const groupInvitesRepository = new GroupInvitesRepository();
