/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: [
    "@nomadgem/ui",
    "@nomadgem/infrastructure",
    "@nomadgem/website",
  ],
};

export default nextConfig;
