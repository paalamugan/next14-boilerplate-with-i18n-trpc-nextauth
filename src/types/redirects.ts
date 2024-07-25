import type { Rewrite } from 'next/dist/lib/load-custom-routes';

export interface Redirect {
  source: string;
  destination: string;
}

export interface SiteRedirectConfig {
  externals: Redirect[];
  internals: Redirect[];
  rewrites: {
    beforeFiles: Rewrite[];
    afterFiles: Rewrite[];
    fallback: Rewrite[];
  };
}
