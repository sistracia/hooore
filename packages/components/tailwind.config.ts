import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

export const preset: Omit<Config, 'content'> = {
  theme: {
    extend: {
      fontSize: {
        h1: ['36px', '48px'],
        'h1-sm': ['68px', '84px'],
        h2: ['32px', '40px'],
        'h2-sm': ['48px', '56px'],
        h3: ['22px', '32px'],
        'h3-sm': ['28px', '40px'],
        h4: ['18px', '28px'],
        'h4-sm': ['20px', '32px'],
        p: ['18px', '26px'],
        'p-sm': ['20px', '32px'],
        cta: ['20px', '28px'],
        'cta-sm': ['40px', '48px'],
        note: ['16px', '24px'],
        chip: ['14px'],
      },
      colors: {},
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'navbar-show': {
          '0%': { overflow: 'hidden' },
          '100%': {
            overflow: 'visible',
          },
        },
        'navbar-hide': {
          '0%': { overflow: 'visible' },
          '100%': {
            overflow: 'hidden',
          },
        },
        'scroll-left': {
          to: {
            left: 'calc(var(--marquee-item-width) * -1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate],
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: 'pc-',
  presets: [preset],
}

export default config
