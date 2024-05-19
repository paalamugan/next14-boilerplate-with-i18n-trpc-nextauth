import { siteConfig } from 'helpers/next.data.mjs';
import { type NextFetchEvent } from 'next/server';
import { type NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';

import { createRouteMatcher } from './utils/routeMatcher';

const intlMiddleware = createMiddleware({
  locales: siteConfig.locale.locales,
  localePrefix: siteConfig.locale.localePrefix,
  defaultLocale: siteConfig.locale.defaultLocale,
});

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/:locale/dashboard(.*)']);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        // If a user is authenticated, the token will be present
        // and the user is authorized.
        return !!token?.id;
      },
    },
  }
);

export default function middleware(request: NextRequestWithAuth, event: NextFetchEvent) {
  if (isProtectedRoute(request)) return authMiddleware(request, event);
  return intlMiddleware(request);
}

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)', '/:locale/(api|trpc)(.*)'],
};
