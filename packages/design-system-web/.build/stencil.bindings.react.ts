import { reactOutputTarget as react } from "@stencil/react-output-target";


export const reactGenerator = (
    componentCorePackage = '@geovistory/design-system-web',
    proxiesFile = '../design-system-react/src/components/stencil-generated/index.ts',
) => react({
        componentCorePackage: componentCorePackage,
        proxiesFile: proxiesFile,
        includeDefineCustomElements: false,
    })
