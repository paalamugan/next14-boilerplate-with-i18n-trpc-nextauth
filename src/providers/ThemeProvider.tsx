'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import { THEME_STORAGE_KEY } from '@/helpers/next.constants';

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="white"
      enableSystem
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
      {...props}
    />
  );
};
