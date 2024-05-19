import type { MeQueryResult } from '@/server/api/routers/auth/auth.types';
import { api } from '@/trpc/server';

export const getMe = async (): Promise<MeQueryResult | null> => {
  try {
    return await api.auth.me();
  } catch {
    return null;
  }
};
