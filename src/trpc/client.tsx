'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useMemo } from 'react';

import { isTRPCClientErrorWithCode } from '@/lib/utils/is-trpc-client-error-with-code';
import { type AppRouter } from '@/server/api/root';

import { transformer } from './shared';

export const api = createTRPCReact<AppRouter>();

type Props = {
  children: React.ReactNode;
};

export const TRPCReactProvider: React.FC<Props> = props => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry(failureCount, error) {
              if (isTRPCClientErrorWithCode(error) && error.data.code === 'UNAUTHORIZED') {
                return false;
              }
              return failureCount < 2;
            },
          },
        },
      }),
    []
  );

  const trpcClient = useMemo(
    () =>
      api.createClient({
        links: [
          loggerLink({
            enabled: op =>
              process.env.NODE_ENV === 'development' ||
              (op.direction === 'down' && op.result instanceof Error),
          }),
          httpBatchLink({
            url: '/api/trpc',
            transformer,
          }),
        ],
      }),
    []
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </api.Provider>
  );
};
