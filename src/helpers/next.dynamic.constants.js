import { siteConfig } from './app.config.js';
import { BASE_PATH, BASE_URL } from './next.constants.js';
import { defaultLocale } from './next.locales.js';

/**
 * This is a list of all static routes or pages from the Website that we do not
 * want to allow to be statically built on our Static Export Build.
 * A list of Ignored Routes by Regular Expressions
 * @type {Array<((route: import('./types.js').RouteSegment) => boolean)>} A list of Ignored Routes by Regular Expressions
 */
export const IGNORED_ROUTES = [
  // This is used to ignore all blog routes except for the English language
  ({ locale, pathname }) => locale !== defaultLocale?.code && /^blog/.test(pathname),
];

/**
 * This is the default Next.js Page Metadata for all pages
 *  @type {import('next').Metadata}
 */
export const PAGE_METADATA = {
  metadataBase: new URL(`${BASE_URL}${BASE_PATH}`),
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  twitter: {
    card: siteConfig.twitter.card,
    title: siteConfig.twitter.title,
    creator: siteConfig.twitter.username,
    images: {
      url: siteConfig.twitter.img,
      alt: siteConfig.twitter.imgAlt,
    },
  },
  alternates: {
    canonical: '',
    languages: { 'x-default': '' },
    types: {
      'application/rss+xml': `${BASE_URL}${BASE_PATH}/en/feed/blog.xml`,
    },
  },
  icons: { icon: siteConfig.favicon },
  openGraph: { images: siteConfig.twitter.img },
};

/**
 * This is the default Next.js Viewport Metadata for all pages
 *
 * @return {import('next').Viewport}
 */
export const PAGE_VIEWPORT = {
  themeColor: [
    {
      color: siteConfig.lightAccentColor,
      media: '(prefers-color-scheme: light)',
    },
    {
      color: siteConfig.darkAccentColor,
      media: '(prefers-color-scheme: dark)',
    },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
};
