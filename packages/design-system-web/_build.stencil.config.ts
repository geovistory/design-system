import { Config } from '@stencil/core';
import { angularGenerator } from './.build/stencil.bindings.angular';
import { reactGenerator } from './.build/stencil.bindings.react';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_build.global.ts',
  globalStyle: './src/global/global.css',
  plugins: [sass()],
  tsconfig: './_build.build.json',
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
