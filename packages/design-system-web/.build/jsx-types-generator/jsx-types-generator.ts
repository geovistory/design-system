import { OutputTargetCustom } from '@stencil/core/internal';

import { cleanupImports, createJsxForReact, decompose, mergeDecomposed, readFile, recompose, writeFile } from './lib';
export const jsxTypesGenerator: OutputTargetCustom = {
  type: 'custom',
  name: 'jsx-types',
  generator: async () => {
    // read and decompose ionicon type file
    const ioniconsTypesRaw = readFile('../../node_modules/ionicons/dist/types/components.d.ts');
    const ioniconsTypes = ioniconsTypesRaw.replace(/from ".*/gm, 'from "@ionic/core";');
    const ioniconsDecomposed = decompose(ioniconsTypes);

    // read and decompose ionic core type file
    const ionicTypesRaw = readFile('../../node_modules/@ionic/core/dist/types/components.d.ts');
    const ionicTypes = ionicTypesRaw.replace(/from ".*/gm, 'from "@ionic/core";');
    const ionicDecomposed = decompose(ionicTypes);

    // read and decompose geov type file
    const geovTypes = readFile('../../src/components.d.ts');
    const geovDecomposed = decompose(geovTypes);

    // merge decomposed
    const merged = mergeDecomposed([ioniconsDecomposed, ionicDecomposed, geovDecomposed]);

    // cleanup imports
    merged.import = cleanupImports(merged.import);

    // recompose all types into one file
    const recomposed = recompose(merged);

    // write the file
    writeFile('../../src/components-all.d.ts', recomposed);

    createJsxForReact('components-all.d.ts', 'components-react.d.ts');
  },
};

