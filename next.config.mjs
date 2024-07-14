/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "antp-server.vercel.app", "res.cloudinary.com"],
  },
};

export default nextConfig;
