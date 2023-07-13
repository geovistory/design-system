import { JsonDocs, JsonDocsComponent, OutputTargetDocsCustom } from '@stencil/core/internal';
import { writeFileSync } from 'fs';
import { stylesToMarkdown } from './markdown-css-props';
import { docsDeprecationMarkdown } from './markdown-deprecation';
import { eventsToMarkdown } from './markdown-events';
import { methodsToMarkdown } from './markdown-methods';
import { overviewToMarkdown } from './markdown-overview';
import { partsToMarkdown } from './markdown-parts';
import { propsToMarkdown } from './markdown-props';
import { slotsToMarkdown } from './markdown-slots';
import { usageToMarkdown } from './markdown-usage';
export const docsGenerator: OutputTargetDocsCustom = {
  type: 'docs-custom',
  generator: (docs: JsonDocs) => {
    /**
     * Create docs for each component
     */
    for (let index = 0; index < docs.components.length; index++) {
      const component = docs.components[index];
      // const componentName = component.tag;
      // if (componentName === 'geov-authority-lookup') console.log(component);

      // docs-overview.md
      createDocsOverview(component);

      // Component API
      createDocsComponentApi(component);
    }
  },
  strict: true,
};

function createDocsComponentApi(cmp: JsonDocsComponent) {
  const filePath = cmp.readmePath.replace('readme.md', 'docs-component-api.md');
  const content = [
    '# Component API',
    ...usageToMarkdown(cmp.usage),
    ...propsToMarkdown(cmp.props),
    ...eventsToMarkdown(cmp.events),
    ...methodsToMarkdown(cmp.methods),
    ...slotsToMarkdown(cmp.slots),
    ...partsToMarkdown(cmp.parts),
    ...stylesToMarkdown(cmp.styles),
  ];
  writeFile(filePath, content);
}

function createDocsOverview(cmp: JsonDocsComponent) {
  const filePath = cmp.readmePath.replace('readme.md', 'docs-overview.md');
  const content = [...docsDeprecationMarkdown(cmp), ...overviewToMarkdown(cmp.overview)];
  writeFile(filePath, content);
}

function writeFile(filePath: string, content: string[], joinChar = '\n') {
  try {
    writeFileSync(filePath || '', content.join(joinChar));
  } catch (err) {
    console.error(err);
  }
}
