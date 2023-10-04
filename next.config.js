/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/company', destination: '/company/overview', permanent: true },
    ];
  },
};

module.exports = nextConfig;
