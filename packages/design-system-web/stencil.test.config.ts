import { Config } from '@stencil/core';
import { stencilBasicConfig } from './.build/stencil/stencil.basic.config';

export const config: Config = {
  ...stencilBasicConfig,
  outputTargets: [
    {
      // build the hydrate script, used by some tests
      type: 'dist-hydrate-script',
    },
  ],
};
