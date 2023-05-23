/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'canary---yellow.com',
        port: '',
        pathname: '/wp-content/themes/virgilabloh/images/hammer-trasp.gif',
      },
    ],
  },
};

module.exports = nextConfig;
