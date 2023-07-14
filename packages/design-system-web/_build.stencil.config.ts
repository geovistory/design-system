import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularGenerator } from './.build/angular-generator';
import { docsGenerator } from './.build/docs-generator/docs-generator';
import { jsxTypesGenerator } from './.build/jsx-types-generator/jsx-types-generator';
import { reactGenerator } from './.build/react-generator';

export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_build.global.ts',
  globalStyle: './src/global/global.scss',
  plugins: [sass()],
  tsconfig: './_build.tsconfig.json',
  outputTargets: [
    docsGenerator,
    jsxTypesGenerator,
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
    reactGenerator(),
  ],
};
