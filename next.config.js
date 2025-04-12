/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Simplified webpack configuration to avoid caching issues
  webpack: (config) => {
    config.cache = false;
    return config;
  }
};

module.exports = nextConfig;