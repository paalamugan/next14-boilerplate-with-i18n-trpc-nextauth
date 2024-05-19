import { TRPCError } from '@trpc/server';

import {
  type CreateGroupMutationResult,
  type GetAllGroupsQueryResult,
} from '@/server/api/routers/groups/groups.types';
import { groupsRepository } from '@/server/api/routers/groups/repository/groups.repository';
import { type CreateGroupArgs } from '@/server/api/routers/groups/service/groups.service.types';

import type { ServerSession } from '../../auth/service/auth.service.types';

class GroupsService {
  public async createGroup(args: CreateGroupArgs): Promise<CreateGroupMutationResult> {
    const data = groupsRepository.createGroup({
      input: args.input,
      ownerId: args.session.user.id,
    });
    if (!data) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Failed to create group',
      });
    }
    return data;
  }

  public async getUserGroups(session: ServerSession): Promise<GetAllGroupsQueryResult> {
    return groupsRepository.getGroupsByUserId(session.user.id);
  }
}

export const groupsService = new GroupsService();
