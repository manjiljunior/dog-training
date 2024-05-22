/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: "dogtraining.nyc3.digitaloceanspaces.com" }],
  },
};

export default nextConfig;
