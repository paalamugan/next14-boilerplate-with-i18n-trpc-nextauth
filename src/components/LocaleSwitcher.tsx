'use client';

import { useLocale } from 'next-intl';
import type { ChangeEventHandler } from 'react';

import { siteConfig } from '@/helpers/app.config';
import { usePathname, useRouter } from '@/lib/navigation';

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = event => {
    router.push(pathname, { locale: event.target.value });
    router.refresh();
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-none focus-visible:ring"
    >
      {siteConfig.locale.locales.map(elt => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
export default LocaleSwitcher;
