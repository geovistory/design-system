import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_build.global.ts',
  globalStyle: './src/global/global.css',
  tsconfig: './_test.tsconfig.json',
  plugins: [sass()],
  outputTargets: [],
};
