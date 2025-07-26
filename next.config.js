/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true
  },
  // Configuration options can be added here as needed
}

module.exports = nextConfig