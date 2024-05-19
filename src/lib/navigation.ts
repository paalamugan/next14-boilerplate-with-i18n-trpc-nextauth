import { siteConfig } from 'helpers/next.data.mjs';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: siteConfig.locale.locales,
  localePrefix: siteConfig.locale.localePrefix,
});
