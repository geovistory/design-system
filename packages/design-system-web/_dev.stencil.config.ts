import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { docsGenerator } from './.build/docs-generator/docs-generator';
import { jsxTypesGenerator } from './.build/jsx-types-generator/jsx-types-generator';
export const config: Config = {
  namespace: 'design-system-web',
  globalScript: './_dev.global.ts',
  globalStyle: './src/global/global.scss',
  tsconfig: './_dev.tsconfig.json',
  plugins: [sass()],
  transformAliasedImportPaths: true,
  outputTargets: [
    docsGenerator,
    jsxTypesGenerator,
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
