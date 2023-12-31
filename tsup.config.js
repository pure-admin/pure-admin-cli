import { defineConfig } from 'tsup'

const config = {
  outDir: 'dist',
  clean: true,
  minify: true,
  sourcemap: false
}

export default defineConfig([
  {
    entry: ['src/index.ts'],
    treeshake: true,
    format: ['esm'],
    ...config
  }
])
