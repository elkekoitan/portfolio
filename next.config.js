/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'vercel.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig 