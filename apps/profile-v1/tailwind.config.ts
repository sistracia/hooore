import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import componentV1ConfigPreset from "@repo/components-v1/tailwind.config.ts";

const preset: Omit<Config, "content"> = {
  plugins: [tailwindAnimate],
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "ss-",
  presets: [preset, componentV1ConfigPreset],
};

export default config;
