/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    cloud_name:process.env.DATABASE_URL,
    api_key: process.env.DATABASE_URL,
    api_secret: process.env.DATABASE_URL,
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
