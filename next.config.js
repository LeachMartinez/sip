/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
      }
    ]
  },
  env: {
    API_URL: process.env.API_URL,
    SITE_URL: process.env.SITE_URL,
    MAIN_DOMAIN: process.env.MAIN_DOMAIN,
  }
}

module.exports = nextConfig
