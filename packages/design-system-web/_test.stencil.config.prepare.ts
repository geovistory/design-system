import { Config } from '@stencil/core';
import { config as testConfig } from './_test.stencil.config';
export const config: Config = {
  ...testConfig,
  outputTargets: [
    {
      type: 'dist-hydrate-script',
    },
  ],
};
