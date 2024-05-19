import { type ServerSession } from '@/server/api/routers/auth/service/auth.service.types';

export type MeQueryResult = {
  user: ServerSession['user'];
};
