import type { Config } from "tailwindcss";
import { preset } from "@repo/component/tailwind.config.ts";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [preset],
};

export default config;
