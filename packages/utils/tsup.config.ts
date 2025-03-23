import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  entry: ['src/**/*'],
  minify: true,

  format: ['cjs', 'esm'],
  dts: true,
  clean: true,

  ...options,
}))
