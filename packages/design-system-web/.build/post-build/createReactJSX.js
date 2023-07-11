let fs = require('fs');
const dashToPascalCase = require('./dashToPascalCase');

/**
 * creates dist/types/react.d.ts
 */
const inFile = '/../../src/components.d.ts';
const outFile = `/../../dist/types/react.d.ts`;

const inPath = __dirname + inFile;
const outPath = __dirname + outFile;

let source = fs.readFileSync(inPath, 'utf-8');
source = source.replace(
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
);
const lines = source.split('\n').map(line => {
  const groups = /(\s*)"(.*)".*LocalJSX/.exec(line);
  if (groups && groups.length > 0) {
    const [all, indetation, dashCase] = groups;
    const camelCase = dashToPascalCase(dashCase);
    return `${indetation}"${dashCase}": StencilReactExternalProps<LocalJSX.${camelCase},JSXBase.HTMLAttributes<HTML${camelCase}Element>>;`;
  }
  return line;
});
const result = lines.join('\n');

if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
fs.writeFileSync(outPath, result, 'utf-8');

console.log('> Wrote in ' + outFile);
