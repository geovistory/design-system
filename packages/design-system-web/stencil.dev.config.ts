import { Config } from '@stencil/core';
import { angularGenerator } from './.build/stencil.bindings.angular';
import { stencilBasicConfig } from './.build/stencil/stencil.basic.config';
import { reactOutputTarget as react } from "@stencil/react-output-target";
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
    reactGenerator('../../dist/types', './.storybook/react/component.ts'),
  ],
};