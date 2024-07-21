/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/component-v1"],
  experimental: {
    serverComponentsExternalPackages: ["oslo"],
  },
};

export default nextConfig;
