// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    outExtension: () => ({ js: '.mjs' }),
  },
  {
    entry: ['src/index.ts'],
    format: ['cjs'],
    outDir: 'dist',
    // Don't include dts again to avoid conflicts
    outExtension: () => ({ js: '.js' }),
  }
])