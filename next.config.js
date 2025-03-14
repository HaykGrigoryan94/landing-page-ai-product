/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/landing-page-ai-product', // Your repository name
  images: {
    unoptimized: true,
  },
  // Add this to ignore TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add this to ignore ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 