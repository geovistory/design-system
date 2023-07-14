import { OutputTargetCustom } from '@stencil/core/internal';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
export const jsxTypesGenerator: OutputTargetCustom = {
  type: 'custom',
  name: 'jsx-types',
  generator: async () => {
    // read ionic components file
    const sourcePath = path.join(__dirname, '../../node_modules/@ionic/core/dist/types/components.d.ts');
    const sourceFile = readFileSync(sourcePath).toString();
    // adapt imports
    const targetFile = sourceFile.replace(/from ".*/gm, 'from "@ionic/core/dist";');
    // write components.d.ts
    const targetPath = path.join(__dirname, '../../src/components-ionic.d.ts');
    writeFileSync(targetPath, targetFile);
    createJsxForReact('components-ionic.d.ts', 'components-ionic-react.d.ts');
    createJsxForReact('components.d.ts', 'components-react.d.ts');
  },
};

function createJsxForReact(sourceFileName, targetFileName) {
  const sourcePath = path.join(__dirname, '../../src', sourceFileName);
  const sourceFile = readFileSync(sourcePath).toString();


  // this typings are not perfect, but it serves as a hack.
  const targetFile = sourceFile
    .replace(
      'declare module "@stencil/core"',
      `
    export interface StyleReactProps {
      class?: string;
      style?: { [key: string]: any };
    }
    export type StencilReactExternalProps<PropType, ElementType> = PropType &
      Omit<React.HTMLAttributes<ElementType>, 'style', 'class'> &
      StyleReactProps;

    declare global`,
    )
    .replace(/LocalJSX\.(\w+)\b/g, 'StencilReactExternalProps<LocalJSX.$1, JSXBase.HTMLAttributes<HTML$1Element>>')
    // .replace(/LocalJSX\.(\w+)\b/g, 'React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & LocalJSX.$1, HTML$1Element>')
    .replace(/\s& JSXBase.HTMLAttributes<.*/g, ';');

  const  targetPath = path.join(__dirname, '../../src', targetFileName);
  writeFileSync(targetPath, targetFile);
}
