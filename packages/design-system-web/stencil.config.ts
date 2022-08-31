import { Config } from '@stencil/core';
import { angularGenerator } from './.build/stencil.bindings.angular';
import { stencilBasicConfig } from './.build/stencil/stencil.basic.config';
import { reactGenerator } from './.build/stencil.bindings.react';
import { happyDomOutputTarget } from '@geovistory/happy-dom-output-target';


export const config: Config = {
  ...stencilBasicConfig,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
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
    happyDomOutputTarget({
      outputPath: '../design-system-happy-dom/src/happyDomWorker.ts',
      loaderPath: '@geovistory/design-system-web/loader'
    }),
    angularGenerator(),
    reactGenerator({
      customElementsDir: 'dist/components',
      enableSSR: true,
      individualComponentFiles: true,
      individualComponentFilesDir: '../design-system-react/src/components',
      individualComponentDefineCustomElement: true
    }),
  ],
};
