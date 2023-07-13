// import { CompilerCtx, JsonDocsComponent, OutputTargetDocsReadme, ValidatedConfig } from '@stencil/core/internal';
// import { join, relative } from 'path';

// import { AUTO_GENERATE_COMMENT } from './constants';
// import { docsDeprecationMarkdown } from './markdown-deprecation';
// import { stylesToMarkdown } from './markdown-css-props';
// import { depsToMarkdown } from './markdown-dependencies';
// import { eventsToMarkdown } from './markdown-events';
// import { methodsToMarkdown } from './markdown-methods';
// import { overviewToMarkdown } from './markdown-overview';
// import { partsToMarkdown } from './markdown-parts';
// import { propsToMarkdown } from './markdown-props';
// import { slotsToMarkdown } from './markdown-slots';
// import { usageToMarkdown } from './markdown-usage';

// export const generateReadme = async (
//   config: ValidatedConfig,
//   compilerCtx: CompilerCtx,
//   readmeOutputs: OutputTargetDocsReadme[],
//   docsData: JsonDocsComponent,
//   cmps: JsonDocsComponent[],
// ) => {
//   const isUpdate = !!docsData.readme;
//   const userContent = isUpdate ? docsData.readme : getDefaultReadme(docsData);

//   await Promise.all(
//     readmeOutputs.map(async readmeOutput => {
//       if (readmeOutput.dir) {
//         const readmeContent = generateMarkdown(userContent, docsData, cmps, readmeOutput);
//         const relPath = relative(config.srcDir, docsData.readmePath);
//         const absPath = join(readmeOutput.dir, relPath);
//         const results = await compilerCtx.fs.writeFile(absPath, readmeContent);
//         if (results.changedContent) {
//           if (isUpdate) {
//             config.logger.info(`updated readme docs: ${docsData.tag}`);
//           } else {
//             config.logger.info(`created readme docs: ${docsData.tag}`);
//           }
//         }
//       }
//     }),
//   );
// };

// export const generateMarkdown = (userContent: string, cmp: JsonDocsComponent, cmps: JsonDocsComponent[], readmeOutput: OutputTargetDocsReadme) => {
//   //If the readmeOutput.dependencies is true or undefined the dependencies will be generate
//   const dependencies = readmeOutput.dependencies !== false ? depsToMarkdown(cmp, cmps) : [];
//   return [
//     userContent,
//     AUTO_GENERATE_COMMENT,
//     '',
//     '',
//     ...docsDeprecationMarkdown(cmp),
//     ...overviewToMarkdown(cmp.overview),
//     ...usageToMarkdown(cmp.usage),
//     ...propsToMarkdown(cmp.props),
//     ...eventsToMarkdown(cmp.events),
//     ...methodsToMarkdown(cmp.methods),
//     ...slotsToMarkdown(cmp.slots),
//     ...partsToMarkdown(cmp.parts),
//     ...stylesToMarkdown(cmp.styles),
//     ...dependencies,
//     `----------------------------------------------`,
//     '',
//     readmeOutput.footer,
//     '',
//   ].join('\n');
// };

// const getDefaultReadme = (docsData: JsonDocsComponent) => {
//   return [`# ${docsData.tag}`, '', '', ''].join('\n');
// };
