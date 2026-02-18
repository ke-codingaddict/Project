import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["imgix.cosmicjs.com"],
  },
};

module.exports = nextConfig;
