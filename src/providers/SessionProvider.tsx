'use client';

import type { SessionProviderProps } from 'next-auth/react';
import { SessionProvider as NextSessionProvider } from 'next-auth/react';

export const SessionProvider = (props: SessionProviderProps) => {
  return <NextSessionProvider {...props} />;
};
