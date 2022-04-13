import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'web-components',
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
    react({
      componentCorePackage: 'web-components',
      proxiesFile: '../react-components/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'web-components',
      directivesProxyFile: '../angular-components/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-components/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
};
