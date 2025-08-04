import { defineConfig, type Options } from 'tsup';

const COMMON_CONFIG: Options = {
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || ''),
    'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version || '0.0.0-0')
  },
  dts: true,
  sourcemap: true,
  target: 'esnext',

  // TODO: Remove below when fully migrated.
  // dts: false,
  platform: 'browser'
};

export default defineConfig([
  {
    ...COMMON_CONFIG,
    entry: { 'atelier': './src/index.ts' },
    format: ['cjs', 'esm']
  },
]);
