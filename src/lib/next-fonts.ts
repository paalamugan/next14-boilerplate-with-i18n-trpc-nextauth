import { Inter as FontSans, Open_Sans as OpenSans } from 'next/font/google';

// This configures the Next.js Font for Open Sans
// We then export a variable and class name to be used
// within Tailwind (tailwind.config.ts) and Storybook (preview.js)
export const OPEN_SANS = OpenSans({
  weight: ['300', '400', '600', '700'],
  display: 'fallback',
  subsets: ['latin'],
  variable: '--font-open-sans',
});

// This configures the Next.js Font for Inter
// We then export a variable and class name to be used
// within Tailwind (tailwind.config.ts) and Storybook (preview.js)
export const INTER = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
