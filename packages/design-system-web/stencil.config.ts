import { Config } from '@stencil/core';
import { angularGenerator } from './.build/stencil.bindings.angular';
import { reactGenerator } from './.build/stencil.bindings.react';
import { stencilBasicConfig } from './.build/stencil/stencil.basic.config';

export const config: Config = {
  ...stencilBasicConfig,
  tsconfig: './tsconfig.build.json',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
    },
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularGenerator(),
    reactGenerator({
      // includeImportCustomElements: true,
      // includeDefineCustomElements: false,
      // customElementsDir: 'dist/components-cjs',
      // enableSSR: true,
      // individualComponentFiles: true,
      // individualComponentFilesDir: '../design-system-react/src/components',
      // individualComponentDefineCustomElement: true
    }),
  ],
};
