import { Config } from '@stencil/core';
import { angularGenerator } from './.build/stencil.bindings.angular';
import { stencilBasicConfig } from './.build/stencil/stencil.basic.config';
import { reactGenerator } from './.build/stencil.bindings.react';


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
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularGenerator(),
    reactGenerator('../../dist/types', '../../loader',  './.storybook/stencil-generated/component.ts'),
  ],
};
