import type { StorybookConfig } from '@storybook/nextjs';

import { cn } from '../src/lib/cn';

const rootClasses = cn(
  // note: this is hard-coded sadly as next/font can only be loaded within next.js context
  '__variable_open-sans-normal',
  // note: this is hard-coded sadly as next/font can only be loaded within next.js context
  '__variable_inter-normal'
);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.{ts,tsx}'],
  docs: {
    autodocs: 'tag',
  },
  logLevel: 'error',
  staticDirs: ['../public'],
  typescript: { reactDocgen: false, check: false },
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  previewBody:
    // This `<style>` is necessary to simulate what `next-themes` (ThemeProvider) does on real applications
    // `next-theme` automatically injects the color-scheme based on the system preference or the current applied theme
    // on Storybook we don't use `next-theme` as we want to simulate themes
    '<style>:root { color-scheme: light; } html[data-theme="dark"] { color-scheme: dark; }</style>' +
    // This adds the base styling for dark/light themes within Storybook. This is a Storybook-only style
    `<body class="${rootClasses}"></body>`,
  addons: [
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpack: async webConfig => ({
    ...webConfig,
    // We want to conform as much as possible with our target settings
    target: 'browserslist',
    // Performance Hints do not make sense on Storybook as it is bloated by design
    performance: { hints: false },
    // `nodevu` is a Node.js-specific package that requires Node.js modules
    // this is incompatible with Storybook. So we just mock the module
    resolve: { ...webConfig.resolve, alias: { '@nodevu/core': false } },
    // We need to configure `node:` APIs as Externals to WebPack
    // since essentially they're not supported on the browser
    externals: {
      'node:fs': 'commonjs fs',
      'node:url': 'commonjs url',
      'node:path': 'commonjs path',
      'node:readline': 'commonjs readline',
    },
    // Removes Pesky Critical Dependency Warnings due to `next/font`
    ignoreWarnings: [
      e => e.message.includes('Critical dep') || e.message.includes('was not found in'),
    ],
  }),
};

export default config;
