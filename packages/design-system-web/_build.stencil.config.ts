import { Config } from '@stencil/core';
import { docsGenerator } from './src/helpers/md-generator/docsGenerator';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_build.global.ts',
  globalStyle: './src/global/global.scss',
  plugins: [sass()],
  tsconfig: './_build.tsconfig.json',
  outputTargets: [
    docsGenerator,
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'dist-custom-elements',
    //   customElementsExportBehavior: 'bundle',
    // },
    // {
    //   type: 'dist-hydrate-script',
    // },
    // {
    //   type: 'docs-readme',
    // },
    // CustomDocumentationGenerator,
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
    // angularGenerator(),
    // reactGenerator(),
  ],
};
