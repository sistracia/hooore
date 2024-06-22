import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export const preset: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--yellow-pisangambon-500))",
        },
        "yellow-pisangambon": {
          50: "rgb(var(--yellow-pisangambon-50))",
          100: "rgb(var(--yellow-pisangambon-100))",
          200: "rgb(var(--yellow-pisangambon-200))",
          300: "rgb(var(--yellow-pisangambon-300))",
          400: "rgb(var(--yellow-pisangambon-400))",
          500: "rgb(var(--yellow-pisangambon-500))",
          600: "rgb(var(--yellow-pisangambon-600))",
          700: "rgb(var(--yellow-pisangambon-700))",
          800: "rgb(var(--yellow-pisangambon-800))",
          900: "rgb(var(--yellow-pisangambon-900))",
        },
        "green-dawetayu": {
          50: "rgb(var(--green-dawetayu-50))",
          100: "rgb(var(--green-dawetayu-100))",
          200: "rgb(var(--green-dawetayu-200))",
          300: "rgb(var(--green-dawetayu-300))",
          400: "rgb(var(--green-dawetayu-400))",
          500: "rgb(var(--green-dawetayu-500))",
          600: "rgb(var(--green-dawetayu-600))",
          700: "rgb(var(--green-dawetayu-700))",
          800: "rgb(var(--green-dawetayu-800))",
          900: "rgb(var(--green-dawetayu-900))",
        },
        "red-cabe": {
          50: "rgb(var(--red-cabe-50))",
          100: "rgb(var(--red-cabe-100))",
          200: "rgb(var(--red-cabe-200))",
          300: "rgb(var(--red-cabe-300))",
          400: "rgb(var(--red-cabe-400))",
          500: "rgb(var(--red-cabe-500))",
          600: "rgb(var(--red-cabe-600))",
          700: "rgb(var(--red-cabe-700))",
          800: "rgb(var(--red-cabe-800))",
          900: "rgb(var(--red-cabe-900))",
        },
        "biru-sendu": {
          50: "rgb(var(--biru-sendu-50))",
          100: "rgb(var(--biru-sendu-100))",
          200: "rgb(var(--biru-sendu-200))",
          300: "rgb(var(--biru-sendu-300))",
          400: "rgb(var(--biru-sendu-400))",
          500: "rgb(var(--biru-sendu-500))",
          600: "rgb(var(--biru-sendu-600))",
          700: "rgb(var(--biru-sendu-700))",
          800: "rgb(var(--biru-sendu-800))",
          900: "rgb(var(--biru-sendu-900))",
        },
        "ivory-gading": {
          50: "rgb(var(--ivory-gading-50))",
          100: "rgb(var(--ivory-gading-100))",
          200: "rgb(var(--ivory-gading-200))",
          300: "rgb(var(--ivory-gading-300))",
          400: "rgb(var(--ivory-gading-400))",
          500: "rgb(var(--ivory-gading-500))",
          600: "rgb(var(--ivory-gading-600))",
          700: "rgb(var(--ivory-gading-700))",
          800: "rgb(var(--ivory-gading-800))",
          900: "rgb(var(--ivory-gading-900))",
        },
        "ink-cumi": {
          50: "rgb(var(--ink-cumi-50))",
          100: "rgb(var(--ink-cumi-100))",
          200: "rgb(var(--ink-cumi-200))",
          300: "rgb(var(--ink-cumi-300))",
          400: "rgb(var(--ink-cumi-400))",
          500: "rgb(var(--ink-cumi-500))",
          600: "rgb(var(--ink-cumi-600))",
          700: "rgb(var(--ink-cumi-700))",
          800: "rgb(var(--ink-cumi-800))",
          900: "rgb(var(--ink-cumi-900))",
        },
      },
      keyframes: {
        "marquee-to-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform:
              "translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)))",
          },
        },
      },
    },
  },
  plugins: [tailwindAnimate],
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [preset],
};

export default config;
