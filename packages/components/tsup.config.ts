import { defineConfig, type Options } from 'tsup'

export default defineConfig((options: Options) => ({
  entry: ['src/**/*'],
  banner: {
    js: "'use client'",
  },
  minify: true,

  format: ['cjs', 'esm'],
  dts: false,
  clean: true,

  external: ['react', 'react-dom'],
  ...options,
}))
