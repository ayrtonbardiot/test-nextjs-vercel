/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.habbo.com",
      },
    ],
  },
};

module.exports = nextConfig;
