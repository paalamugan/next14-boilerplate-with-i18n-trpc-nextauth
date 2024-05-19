/* eslint-disable no-console */
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { defaultLocale } from 'helpers/next.locales.mjs';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getLocale } from 'next-intl/server';

import { env } from '@/env';
import { appRouter } from '@/server/api/root';
import { createTRPCContext } from '@/server/api/trpc';

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (opts: { req: NextRequest; headers: Headers; locale: string }) => {
  const token = await getToken({ req: opts.req });
  return createTRPCContext({ ...opts, token });
};

const handler = async (req: NextRequest) => {
  const locale = await getLocale();
  const prefixLocale = locale === defaultLocale.code ? '' : `/${locale}`;
  return fetchRequestHandler({
    endpoint: `${prefixLocale}/api/trpc`,
    req,
    router: appRouter,
    createContext: ({ resHeaders }) => createContext({ req, headers: resHeaders, locale }),
    onError:
      env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`);
          }
        : undefined,
  });
};

export { handler as GET, handler as POST };
