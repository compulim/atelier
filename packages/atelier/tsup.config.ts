import { defineConfig } from 'tsup';

export default defineConfig([
  {
    dts: true,
    entry: {
      ['atelier'.split('/').at(-1) as string]: './src/index.ts'
    },
    format: ['cjs', 'esm'],
    sourcemap: true,
    target: 'esnext'
  }
]);
