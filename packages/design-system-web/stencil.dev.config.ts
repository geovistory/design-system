import { Config } from '@stencil/core';
import { stencilBasicConfig } from './.build/stencil/stencil.basic.config';

export const config: Config = {
  ...stencilBasicConfig,
  tsconfig: './tsconfig.dev.json',
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
