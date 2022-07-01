import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const stencilBasicConfig: Config = {
  namespace: 'design-system-web',
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.scss',
  plugins: [sass()],
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
      componentCorePackage: '@geovistory/design-system-web',
      directivesProxyFile: '../design-system-angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../design-system-angular/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
    react({
      componentCorePackage: '@geovistory/design-system-web',
      proxiesFile: '../design-system-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
