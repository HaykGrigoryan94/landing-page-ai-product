/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/landing-page-ai-product', // Your repository name
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 