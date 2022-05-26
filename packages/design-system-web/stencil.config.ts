import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'design-system-web',
  globalStyle: 'src/global/global.css',
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
    angularOutputTarget({
      componentCorePackage: 'design-system-web',
      directivesProxyFile: '../design-system-angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../design-system-angular/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
    react({
      componentCorePackage: 'design-system-web',
      proxiesFile: '../design-system-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
