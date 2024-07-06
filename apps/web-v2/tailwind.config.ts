import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const preset: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "page-background": "rgb(var(--page-background))",
        "yellow-pisangambon": {
          500: "rgb(var(--yellow-pisangambon-500))",
        },
        "black-mamba": {
          400: "rgb(var(--black-mamba-400))",
          500: "rgb(var(--black-mamba-500))",
        },
        "crema-cream": {
          500: "rgb(var(--crema-cream-500))",
          700: "rgb(var(--crema-cream-700))",
          800: "rgb(var(--crema-cream-800))",
        },
        "green-nyai": {
          500: "rgb(var(--green-nyai-500))",
          700: "rgb(var(--green-nyai-700))",
          800: "rgb(var(--green-nyai-800))",
        },
        "blue-clair": {
          700: "rgb(var(--blue-clair-700))",
          800: "rgb(var(--blue-clair-800))",
          900: "rgb(var(--blue-clair-900))",
        },
        oranje: {
          600: "rgb(var(--oranje-600))",
          900: "rgb(var(--oranje-900))",
        },
        "dan-brown": {
          500: "rgb(var(--dan-brown-500))",
          900: "rgb(var(--dan-brown-900))",
        },
        "purple-widow": {
          500: "rgb(var(--dan-brown-500))",
          900: "rgb(var(--purple-widow-900))",
        },
        "red-cabe": {
          400: "rgb(var(--red-cabe-400))",
        },
      },
      keyframes: {
        "marquee-to-left": {
          from: {
            left: "100%",
          },
          to: {
            left: "calc(var(--marquee-item-width)*-1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "navbar-show": {
          "0%": { overflow: "hidden" },
          "100%": {
            overflow: "visible",
          },
        },
        "navbar-hide": {
          "0%": { overflow: "visible" },
          "100%": {
            overflow: "hidden",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "ss-",
  presets: [preset],
};

export default config;
