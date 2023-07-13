import { JsonDocsProp } from '@stencil/core/internal';
import { MarkdownTable } from './docs-util';

export const propsToMarkdown = (props: JsonDocsProp[]) => {
  const content: string[] = [];
  if (props.length === 0) {
    return content;
  }

  content.push(`## Properties`);
  content.push(``);

  const table = new MarkdownTable();

  table.addHeader(['Property', 'Attribute', 'Description', 'Type', 'Default']);

  props.forEach(prop => {
    table.addRow([getPropertyField(prop), getAttributeField(prop), getDocsField(prop), `\`${prop.type}\``, `\`${prop.default}\``]);
  });

  content.push(...table.toMarkdown());
  content.push(``);
  content.push(``);

  return content;
};

const getPropertyField = (prop: JsonDocsProp) => {
  return `\`${prop.name}\`${prop.required ? ' _(required)_' : ''}`;
};

const getAttributeField = (prop: JsonDocsProp) => {
  return prop.attr ? `\`${prop.attr}\`` : '--';
};

const getDocsField = (prop: JsonDocsProp) => {
  return `${prop.deprecation !== undefined ? `<span style="color:red">**[DEPRECATED]**</span> ${prop.deprecation}<br/><br/>` : ''}${prop.docs}`;
};
