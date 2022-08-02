/** @type {import('next').NextConfig} */

const path = require('path');
// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)

module.exports = {
  reactStrictMode: false,
  compress: true,
  webpack5: true,
  webpack: config => {
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  node: 'empty',
  react: {
    useSuspense: false,
    wait: true
  },
  experimental: {
    outputStandalone: true
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    };
    return config;
  }
};
