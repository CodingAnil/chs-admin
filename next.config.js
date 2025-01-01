/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["datingadult.s3.us-east-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
