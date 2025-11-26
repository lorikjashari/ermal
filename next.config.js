/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
