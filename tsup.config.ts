import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.test.ts',
    '!src/**/*.test.tsx',
    '!src/**/*.spec.ts',
    '!src/**/*.spec.tsx'
  ],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  treeshake: true,
  minify: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";'
    }
  },
  async onSuccess() {
    const fs = await import('fs')
    const path = await import('path')

    const srcCss = path.join(process.cwd(), 'src/assets/global.css')
    const distCss = path.join(process.cwd(), 'dist/index.css')

    if (fs.existsSync(srcCss)) {
      fs.copyFileSync(srcCss, distCss)
    }
  }
})
