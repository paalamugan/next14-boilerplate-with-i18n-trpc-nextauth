import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';

import { Logger } from '@/server/api/common/logger';
import { groupInvitesRepository } from '@/server/api/routers/groups/sub-routers/group-invites/repository/group-invites.repository';
import { type SendGroupInviteArgs } from '@/server/api/routers/groups/sub-routers/group-invites/service/group-invites.service.types';

class GroupInvitesService {
  private readonly logger = new Logger(GroupInvitesService.name);

  public async sendGroupInvite(args: SendGroupInviteArgs): Promise<true> {
    if (args.input.email === args.session.user.username) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'You cannot invite yourself',
      });
    }

    const expirationTime = DateTime.now().plus({ days: 7 }).toUTC().toJSDate();

    this.logger.info('Sending group invite', args.input.email, args.input.groupId, expirationTime);

    await groupInvitesRepository.addPendingInvite({
      groupId: args.input.groupId,
      inviteeEmail: args.input.email,
      expirationTime,
    });

    return true;
  }
}

export const groupInvitesService = new GroupInvitesService();
