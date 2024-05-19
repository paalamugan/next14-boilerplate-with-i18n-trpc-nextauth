import type Link from 'next/link';
import type { NextRequest } from 'next/server';

import { paths } from './pathMatcher';

/**
 * Enables autocompletion for a union type, while keeping the ability to use any string
 * or type of `T`
 */
type Autocomplete<U extends T, T = string> = U | (T & Record<never, never>);

type WithPathPatternWildcard<T> = `${T & string}(.*)`;
type NextTypedRoute<T = Parameters<typeof Link>['0']['href']> = T extends string ? T : never;
type RouteMatcherWithNextTypedRoutes = Autocomplete<
  WithPathPatternWildcard<NextTypedRoute> | NextTypedRoute
>;
export type RouteMatcherParam =
  | Array<RegExp | RouteMatcherWithNextTypedRoutes>
  | RegExp
  | RouteMatcherWithNextTypedRoutes
  | ((req: NextRequest) => boolean);

const preComputePathRegex = (patterns: Array<RegExp | RouteMatcherWithNextTypedRoutes>) => {
  return patterns.map(pattern => (pattern instanceof RegExp ? pattern : paths.toRegexp(pattern)));
};

/**
 * Returns a function that accepts a `Request` object and returns whether the request matches the list of
 * predefined routes that can be passed in as the first argument.
 *
 * You can use glob patterns to match multiple routes or a function to match against the request object.
 * Path patterns and regular expressions are supported, for example: `['/foo', '/bar(.*)'] or `[/^\/foo\/.*$/]`
 */
export const createRouteMatcher = (routes: RouteMatcherParam) => {
  if (typeof routes === 'function') {
    return (req: NextRequest) => routes(req);
  }
  const routePatterns = [routes || ''].flat().filter(Boolean);

  const matchers = preComputePathRegex(routePatterns);
  return (req: NextRequest) => matchers.some(matcher => matcher.test(req.nextUrl.pathname));
};
