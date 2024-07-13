import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const preset: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontSize: {
        h1: ["36px", "48px"],
        "h1-sm": ["68px", "84px"],
        h2: ["32px", "40px"],
        "h2-sm": ["48px", "56px"],
        h3: ["22px", "32px"],
        "h3-sm": ["28px", "40px"],
        h4: ["18px", "28px"],
        "h4-sm": ["20px", "32px"],
        p: ["18px", "26px"],
        "p-sm": ["20px", "32px"],
        cta: ["20px", "28px"],
        "cta-sm": ["40px", "48px"],
        note: ["16px", "24px"],
        chip: ["14px"],
      },
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
