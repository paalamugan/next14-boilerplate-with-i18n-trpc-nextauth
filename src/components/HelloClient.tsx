'use client';

import { useSession } from '@/stores/session-store';

export const HelloClient = () => {
  const session = useSession();
  return JSON.stringify(session, null, 2);
};
