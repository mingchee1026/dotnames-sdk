import type { Options } from 'tsup';

export const tsup: Options = {
  // splitting: true,
  // sourcemap: true, // source map is only available in prod
  clean: true, // rimraf disr
  dts: true, // generate dts file for main module
  format: ['cjs', 'esm'], // generate cjs and esm files
  // minify: true,
  // bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: false,
  target: 'es2016',
  outDir: 'dist',
  entry: ['src/**/*.ts'],
};
