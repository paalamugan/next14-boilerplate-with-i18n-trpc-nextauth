export type GroupInvite = {
  groupId: string;
  title: string;
  owner: string;
};

export type AddPendingInviteArgs = {
  groupId: string;
  inviteeEmail: string;
  expirationTime: Date;
};

export type DeletePendingInviteArgs = {
  groupId: string;
  inviteeEmail: string;
};

export type CheckPendingInviteExistenceArgs = {
  groupId: string;
  inviteeEmail: string;
};

export type AddMemberToGroupAndRemovePendingInviteArgs = {
  groupId: string;
  userIdToAdd: string;
  inviteeEmail: string;
};
