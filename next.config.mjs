/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["@hooore/components", "@hooore/editor"],
  serverExternalPackages: ["oslo"],
};

export default nextConfig;
