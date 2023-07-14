import { angularOutputTarget } from "@stencil/angular-output-target";

export const angularGenerator = () => angularOutputTarget({
    componentCorePackage: '@geovistory/design-system-web',
    directivesProxyFile: '../design-system-angular/projects/component-library/src/lib/stencil-generated/components.ts',
    directivesArrayFile: '../design-system-angular/projects/component-library/src/lib/stencil-generated/index.ts',
})