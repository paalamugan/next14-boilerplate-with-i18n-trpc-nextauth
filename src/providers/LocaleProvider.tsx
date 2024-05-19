import { NextIntlClientProvider, useLocale, useMessages, useTimeZone } from 'next-intl';
import type { FC, PropsWithChildren } from 'react';

export const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
  // Using internationalization in Client Components
  const messages = useMessages();
  const timezone = useTimeZone();
  const locale = useLocale();

  return (
    <NextIntlClientProvider messages={messages} timeZone={timezone} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};
