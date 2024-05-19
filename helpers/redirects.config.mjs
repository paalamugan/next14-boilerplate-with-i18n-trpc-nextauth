/** @type {import('../src/types').SiteRedirect} */
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
  ],
  internals: [],
  rewrites: {
    beforeFiles: [],
    afterFiles: [],
    fallback: [],
  },
};

export default redirects;
