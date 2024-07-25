/** @type {import('../types').SiteRedirectConfig} */
const redirects = {
  externals: [
    {
      source: '/index.html',
      destination: '/',
    },
    {
      source: '/api.html',
      destination: '/api',
    },
    {
      source: '/:locale/dashboard.html',
      destination: '/:locale/dashboard',
    },
    { source: '/health', destination: '/api/health' },
    { source: '/ping', destination: '/api/health' },
    { source: '/api/ping', destination: '/api/health' },
    {
      source: '/(static/|)favicon.ico',
      destination: '/static/favicons/favicon.ico',
    },
    {
      source: '/(static/|)favicon.png',
      destination: '/static/favicons/favicon.ico',
    },
    {
      source: '/(static/|)apple-touch-icon(.*).png',
      destination: '/static/favicons/apple-touch-icon.png',
    },
    {
      source: '/(static/)logo.png',
      destination: '/static/images/logo.png',
    },
  ],
  internals: [],
  rewrites: {
    beforeFiles: [],
    afterFiles: [],
    fallback: [],
  },
};

export default redirects;
