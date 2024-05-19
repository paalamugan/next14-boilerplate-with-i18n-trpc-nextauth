import { Logger } from '@/server/api/common/logger';

import { type CreateGroupArgs, type Group } from './groups.repository.types';

class GroupsRepository {
  private readonly logger = new Logger(GroupsRepository.name);

  public async createGroup(args: CreateGroupArgs): Promise<Group> {
    this.logger.info('Creating group', args.input, args.ownerId);

    return {
      id: '',
      members: [],
      owner: {
        username: '',
        id: '0',
      },
    };
  }

  public async getGroupsByUserId(userId: string): Promise<Group[]> {
    this.logger.info('Getting groups by user ID', userId);
    const rows: Group[] = [];

    return rows;
  }
}

export const groupsRepository = new GroupsRepository();
