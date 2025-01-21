import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // this includes files from the monorepo base two directories up for `output: "standalone"`
  outputFileTracingRoot: path.join(__dirname, "../../"),
  transpilePackages: ["@hooore/components", "@hooore/editor"],
  serverExternalPackages: ["oslo"],
};

export default nextConfig;
