import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

export interface TwitterConfig {
  username: string;
  card: 'summary' | 'summary_large_image' | 'player' | 'app' | undefined;
  img: string;
  imgAlt: string;
  title: 'summary' | 'summary_large_image' | 'player' | 'app' | undefined;
}

export interface OGConfig {
  imgType: string;
  imgWidth: string;
  imgHeight: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  featuredImage: string;
  favicon: string;
  lightAccentColor: string;
  darkAccentColor: string;
  og: OGConfig;
  twitter: TwitterConfig;
  locale: {
    locales: string[];
    defaultLocale: string;
    localePrefix: LocalePrefix;
    timeZone: string;
  };
  github: {
    repoLink: string;
  };
}

export interface Author {
  id: string;
  name: string;
  website: string;
}
