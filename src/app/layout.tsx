import '@/styles/globals.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocale, unstable_setRequestLocale } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import type { FC, PropsWithChildren } from 'react';

import { siteConfig } from '@/helpers/app.config';
import { allLocaleCodes, availableLocalesMap, defaultLocale } from '@/helpers/next.locales';
import BaseLayout from '@/layouts/Base';
import { cn } from '@/lib/cn';
import { INTER, OPEN_SANS } from '@/lib/next-fonts';
import { Providers } from '@/providers/providers';

const fontClasses = cn(OPEN_SANS.variable, INTER.variable);

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/static/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/static/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/static/favicons/favicon.ico',
    },
  ],
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale();

  const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;

  if (!allLocaleCodes.includes(locale)) {
    // Forces the current locale to be the Default Locale
    unstable_setRequestLocale(defaultLocale.code);
    // when the locale is not listed in the locales, return NotFound
    return notFound();
  }

  // Configures the current Locale to be the given Locale of the Request
  unstable_setRequestLocale(locale);

  return (
    <html className={fontClasses} dir={langDir} lang={hrefLang} suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader height={5} />
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
// Enable edge runtime but you are required to disable the `migrate` function in `src/lib/db.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';

export const dynamic = 'force-dynamic';
