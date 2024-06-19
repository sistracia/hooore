import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  darkMode: ["selector"],
  prefix: "",
  theme: {
    container: {},
    extend: {
      colors: {},
      borderRadius: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
