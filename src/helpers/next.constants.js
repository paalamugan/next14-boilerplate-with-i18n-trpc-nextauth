/**
 * This is used to verify if the current Website is running on a Development Environment
 */
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * This is used for telling Next.js if the Website is deployed on Vercel
 *
 * Can be used for conditionally enabling features that we know are Vercel only
 *
 * @see https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#framework-environment-variables
 */
export const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || undefined;

/**
 * This is used for defining a default time of when `next-data` and other dynamically generated
 * but static-enabled pages should be regenerated.
 *
 * Note that this is a custom Environment Variable that can be defined by us when necessary
 */
export const VERCEL_REVALIDATE = Number(process.env.NEXT_PUBLIC_VERCEL_REVALIDATE_TIME || 300);

/**
 * This is used for telling Next.js to do a Static Export Build of the Website
 *
 * This is used for static/without a app server hosting, such as on our
 * legacy Website Build Environment on app's DigitalOcean Droplet.
 *
 * Note that this is a manual Environment Variable defined by us during `npm run deploy`
 */
export const ENABLE_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const NEXT_PUBLIC_VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'https://example.com';

/**
 * This is used for any place that requires the full canonical URL path for the app Website (and its deployment), such as for example, the app RSS Feed.
 *
 * This variable can either come from the Vercel Deployment as `NEXT_PUBLIC_VERCEL_URL` or from the `NEXT_PUBLIC_BASE_URL` Environment Variable that is manually defined
 * by us if necessary. Otherwise it will fallback to the default app Website URL.
 *
 * @see https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#framework-environment-variables
 */
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : NEXT_PUBLIC_VERCEL_URL;

/**
 * This is used for any place that requires the app distribution URL (which by default is nodejs.org/dist)
 *
 * Note that this is a custom Environment Variable that can be defined by us when necessary
 */
export const DIST_URL = process.env.NEXT_PUBLIC_DIST_URL || 'https://example.com/dist/';

/**
 * Supports a manual override of the base path of the Website
 *
 * This is useful when running the deployment on a subdirectory
 * of a domain, such as when hosted on GitHub Pages.
 *
 * Note that this is a custom Environment Variable that can be defined by us when necessary
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * This ReGeX is used to remove the `index.md(x)` suffix of a name and to remove
 * the `.md(x)` extensions of a filename.
 *
 * This RegEx is used to transform the file system pathnames into acceptable
 * Route Segments for Next.js Dynamic Routes on `pages/[...path].tsx`
 */
export const MD_EXTENSION_REGEX = /((\/)?(index))?\.mdx?$/i;

/**
 * The `localStorage` key to store the theme choice of `next-themes`
 *
 * This is what allows us to store user preference for theming
 */
export const THEME_STORAGE_KEY = 'theme';

/**
 * This is a list of all external links that are used on website sitemap.
 * @type {Array<string>}
 * @see https://github.com/nodejs/nodejs.org/issues/5813 for more context
 */
export const EXTERNAL_LINKS_SITEMAP = [];
