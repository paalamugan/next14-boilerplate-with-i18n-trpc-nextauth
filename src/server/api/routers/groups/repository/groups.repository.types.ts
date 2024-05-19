import type { UserSchemaType } from '@/db/models/schema';
import { type CreateGroupInputType } from '@/server/api/routers/groups/groups.input';

export type GroupMember = {
  username: UserSchemaType['username'];
  id: UserSchemaType['id'];
};

export type Group = {
  id: string;
  members: GroupMember[];
  owner: Omit<GroupMember, 'updated_at'>;
};

export type CreateGroupArgs = {
  input: CreateGroupInputType;
  ownerId: UserSchemaType['id'];
};

export type DeleteGroupArgs = {
  groupId: Group['id'];
  ownerId: UserSchemaType['id'];
};

export type UndoDeleteGroupArgs = {
  groupId: Group['id'];
  ownerId: UserSchemaType['id'];
};

export type CheckGroupExistenceArgs = {
  groupId: Group['id'];
  ownerId: UserSchemaType['id'];
};

export type CheckGroupMemberExistenceArgs = {
  groupId: Group['id'];
};
