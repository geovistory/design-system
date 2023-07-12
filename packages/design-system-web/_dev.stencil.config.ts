import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_dev.global.ts',
  globalStyle: './src/global/global.css',
  tsconfig: './_dev.tsconfig.json',
  plugins: [sass()],
  transformAliasedImportPaths: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
  ],
};
