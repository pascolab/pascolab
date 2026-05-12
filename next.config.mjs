/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      }
    ]
  },
  trailingSlash: false,
};

export default nextConfig;
