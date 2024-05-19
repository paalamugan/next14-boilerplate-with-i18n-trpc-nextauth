/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import 'server-only';

import { defaultLocale } from 'helpers/next.locales.mjs';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { Logger } from '@/server/api/common/logger';
import pc from '@/server/api/common/pc';
import { appRouter } from '@/server/api/root';
import { createCallerFactory, createTRPCContext, type TRPCContext } from '@/server/api/trpc';

import { getUrl } from './shared';

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = async (): Promise<TRPCContext> => {
  const heads = new Headers(headers());
  heads.set('x-trpc-source', 'rsc');

  const request = new Request(getUrl(), {
    headers: heads,
  });
  const req = new NextRequest(request);
  const token = await getToken({ req });

  return createTRPCContext({
    headers: heads,
    req,
    token,
    locale: defaultLocale.code,
  });
};

const createCaller = createCallerFactory(appRouter);

export const api = createCaller(() => createContext(), {
  onError: ({ path, error, type }) => {
    Logger.error(pc.red(`❌ tRPC failed on [${type} - ${path ?? '<no-path>'}]:`), error);
  },
});
