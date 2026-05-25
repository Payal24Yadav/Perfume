/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optionally configure image domains if needed in the future
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
