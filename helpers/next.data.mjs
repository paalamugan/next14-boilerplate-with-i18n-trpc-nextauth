import _siteNavigation from './navigation.config.mjs';
import _siteRedirects from './redirects.config.mjs';
import _siteConfig from './site.config.mjs';

/** @type {import('../src/types').SiteNavigation} */
export const siteNavigation = _siteNavigation;

/** @type {import('../src/types').SiteRedirect} */
export const siteRedirect = _siteRedirects;

/** @type {import('../src/types').SiteConfig} */
export const siteConfig = _siteConfig;
