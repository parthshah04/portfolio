/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || "development",
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
