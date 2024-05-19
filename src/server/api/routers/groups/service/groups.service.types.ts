import { type CreateGroupInputType } from '@/server/api/routers/groups/groups.input';

import type { ServerSession } from '../../auth/service/auth.service.types';

export type CreateGroupArgs = {
  input: CreateGroupInputType;
  session: ServerSession;
};

export type DeleteGroupArgs = {
  groupId: string;
  session: ServerSession;
};

export type UndoDeleteGroupArgs = {
  groupId: string;
  session: ServerSession;
};
