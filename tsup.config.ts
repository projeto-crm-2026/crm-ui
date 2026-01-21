import autoprefixer from 'autoprefixer'
import fs from 'node:fs'
import path from 'node:path'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import { defineConfig } from 'tsup'

import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  tsconfig: './tsconfig.app.json',
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],

  esbuildOptions(options) {
    options.banner = {
      js: '"use client";'
    }
  },
  async onSuccess() {
    const srcCssPath = path.join(process.cwd(), 'src/assets/global.css')
    const distCssPath = path.join(process.cwd(), 'dist/index.css')

    if (fs.existsSync(srcCssPath)) {
      if (!fs.existsSync(path.dirname(distCssPath))) {
        fs.mkdirSync(path.dirname(distCssPath), { recursive: true })
      }

      const cssContent = fs.readFileSync(srcCssPath, 'utf8')

      const result = await postcss([
        postcssImport(),
        tailwindcss(),
        autoprefixer()
      ]).process(cssContent, {
        from: srcCssPath,
        to: distCssPath
      })

      fs.writeFileSync(distCssPath, result.css)
    }
  }
})
