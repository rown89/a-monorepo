/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  transpilePackages: [
    "@nomadgem/ui",
    "@nomadgem/infrastructure",
    "@nomadgem/website",
  ],
};

export default nextConfig;
