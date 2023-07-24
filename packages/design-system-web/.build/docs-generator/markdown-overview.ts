/**
 * Generate an 'Overview' section for a markdown file
 * @param overview a component-level comment string to place in a markdown file
 * @returns The generated Overview section. If the provided overview is empty, return an empty list
 */
export const overviewToMarkdown = (overview: string | undefined): ReadonlyArray<string> => {
  if (!overview) {
    return ['<span style="color:red">Please add a description in JsDocs to component class</span>'];
  }

  const content: string[] = [];
  content.push(`${overview.trim()}`);
  content.push('');

  return content;
};
