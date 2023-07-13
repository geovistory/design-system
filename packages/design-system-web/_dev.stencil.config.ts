import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { docsGenerator } from './src/helpers/md-generator/docsGenerator';
export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_dev.global.ts',
  globalStyle: './src/global/global.scss',
  tsconfig: './_dev.tsconfig.json',
  plugins: [sass()],
  transformAliasedImportPaths: true,
  outputTargets: [
    docsGenerator,
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
