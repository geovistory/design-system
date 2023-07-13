import { JsonDocsEvent } from '@stencil/core/internal';
import { MarkdownTable } from './docs-util';

export const eventsToMarkdown = (events: JsonDocsEvent[]) => {
  const content: string[] = [];
  if (events.length === 0) {
    return content;
  }

  content.push(`## Events`);
  content.push(``);

  const table = new MarkdownTable();

  table.addHeader(['Event', 'Description', 'Type']);

  events.forEach(ev => {
    table.addRow([`\`${ev.event}\``, getDocsField(ev), `\`CustomEvent<${ev.detail}>\``]);
  });

  content.push(...table.toMarkdown());
  content.push(``);
  content.push(``);

  return content;
};

const getDocsField = (prop: JsonDocsEvent) => {
  return `${prop.deprecation !== undefined ? `<span style="color:red">**[DEPRECATED]**</span> ${prop.deprecation}<br/><br/>` : ''}${prop.docs}`;
};
