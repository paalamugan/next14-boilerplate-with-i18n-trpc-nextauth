import { availableLocaleCodes, defaultLocale, localePrefix } from './next.locales.mjs';

/** @type {import('../src/types').SiteConfig} */
const site = {
  title: 'Next14 With Next Auth Boilerplate',
  description:
    'Next14 is a Next.js boilerplate with NextAuth.js, TRPC, Tailwind CSS, and Internationalization support.',
  favicon: '/static/favicons/favicon.png',
  github: {
    repoLink: 'https://github.com/paalamugan/next14-with-next-auth-boilerplate',
  },
  twitter: {
    username: '@next14',
    card: 'summary',
    img: '/static/images/logo-hexagon-card.png',
    imgAlt: 'The Next14 Logo',
    title: 'summary',
  },
  locale: {
    locales: availableLocaleCodes,
    defaultLocale: defaultLocale.code,
    localePrefix: localePrefix,
    timeZone: 'Etc/UTC',
  },
  featuredImage: '/static/images/hero.png',
  lightAccentColor: '#333',
  darkAccentColor: '#333',
  og: {
    imgType: '/static/images/og-image.png',
    imgHeight: '630',
    imgWidth: '1200',
  },
};

export default site;
