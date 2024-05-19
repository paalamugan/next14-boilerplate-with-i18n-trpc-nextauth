import { type ServerSession } from '@/server/api/routers/auth/service/auth.service.types';
import {
  type AcceptGroupInviteInputType,
  type SendGroupInviteInputType,
} from '@/server/api/routers/groups/sub-routers/group-invites/group-invites.input';

export type SendGroupInviteArgs = {
  input: SendGroupInviteInputType;
  session: ServerSession;
};

export type AcceptGroupInviteArgs = {
  input: AcceptGroupInviteInputType;
  session: ServerSession;
};

export type DeclineGroupInviteArgs = {
  groupId: string;
  session: ServerSession;
};

export type RemovePendingInviteArgs = {
  groupId: string;
  inviteeEmail: string;
  session: ServerSession;
};

export type GetPendingInvitesForGroupArgs = {
  groupId: string;
  session: ServerSession;
};
