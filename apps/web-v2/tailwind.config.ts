import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const preset: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "yellow-pisangambon": {
          500: "rgb(var(--yellow-pisangambon-500))",
        },
        "black-mamba": {
          400: "rgb(var(--black-mamba-400))",
          500: "rgb(var(--black-mamba-500))",
        },
        "crema-cream": {
          500: "rgb(var(--crema-cream-500))",
        },
        "green-nyai": {
          500: "rgb(var(--green-nyai-500))",
          700: "rgb(var(--green-nyai-700))",
        },
        "blue-clair": {
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "navbar-show": {
          "0%": { height: "0px", overflow: "hidden" },
          "100%": {
            height: "var(--navbar-content-height)",
            overflow: "visible",
          },
        },
        "navbar-hide": {
          "0%": { height: "var(--navbar-content-height)", overflow: "visible" },
          "100%": {
            height: "0px",
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
