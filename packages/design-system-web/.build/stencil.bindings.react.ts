import { reactOutputTarget as react } from "@geovistory/react-output-target";


export const reactGenerator = (
    componentCorePackage = '@geovistory/design-system-web',
    loaderDir = '/loader',
    proxiesFile = '../design-system-react/src/components/stencil-generated/index.ts',
) => react({
        componentCorePackage: componentCorePackage,
        proxiesFile: proxiesFile,
        includeDefineCustomElements: true,
        loaderDir
    })
