import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: 'editor-',
  safelist: ['ProseMirror'],
  corePlugins: {
    preflight: false,
  },
}

export default config
