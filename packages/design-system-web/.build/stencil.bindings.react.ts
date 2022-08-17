import { OutputTargetReact, reactOutputTarget as react } from "@geovistory/react-output-target";


export const reactGenerator = (
  config?: Partial<OutputTargetReact>
) => react({
  // defaults
  componentCorePackage: '@geovistory/design-system-web',
  loaderDir: '/loader',
  proxiesFile: '../design-system-react/src/components/index.ts',
  includeDefineCustomElements: true,

  // override with custom config
  ...config
})
