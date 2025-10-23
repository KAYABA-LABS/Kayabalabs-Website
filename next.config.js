/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/digital-marketing',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
