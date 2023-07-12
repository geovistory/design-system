import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_build.global.ts',
  globalStyle: './src/global/global.css',
  plugins: [sass()],
  tsconfig: './_test.tsconfig.json',
  outputTargets: [
    {
      type: 'dist-hydrate-script',
    },
  ]
};
