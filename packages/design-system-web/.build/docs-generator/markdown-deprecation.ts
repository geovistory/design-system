import { JsonDocsComponent } from '@stencil/core/internal';

export const docsDeprecationMarkdown = (cmp: JsonDocsComponent) => {
  if (cmp.deprecation !== undefined) {
    return [`> **[DEPRECATED]** ${cmp.deprecation}`, ''];
  }
  return [];
};
