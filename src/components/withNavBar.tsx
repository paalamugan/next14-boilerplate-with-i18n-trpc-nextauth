'use client';

import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

import NavBar from '@/components/Containers/NavBar';
import { availableLocales } from '@/helpers/next.locales';
import { useSiteNavigationConfig } from '@/hooks';
import { usePathname, useRouter } from '@/lib/navigation';

const WithNavBar: FC = () => {
  const { navigationItems } = useSiteNavigationConfig();
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const { replace } = useRouter();

  const locale = useLocale();

  const toggleCurrentTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <div>
      <NavBar
        onThemeTogglerClick={toggleCurrentTheme}
        languages={{
          currentLanguage: locale,
          availableLanguages: availableLocales,
          onChange: localeData => replace(pathname!, { locale: localeData.code }),
        }}
        navItems={navigationItems.map(([, { label, link, target }]) => ({
          link,
          text: label,
          target,
        }))}
      />
    </div>
  );
};

export default WithNavBar;
