import { defineConfig } from 'tsup'

export default defineConfig([
    {
        entry: ['src/index.ts'],
        format: ['esm'],
        outDir: 'dist',
        outExtension: () => ({ js: '.mjs' }),
        // don't generate dts here
        dts: false,
        clean: true
    },
    {
        entry: ['src/index.ts'],
        format: ['cjs'],
        outDir: 'dist',
        outExtension: () => ({ js: '.js' }),
        dts: true
    }
])