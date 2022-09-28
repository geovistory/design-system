export function createFilter(searchString: string, classUri: string) {
  const filters = [];
  if (searchString) filters.push(`regex(?entityLabel, "^${searchString}", "i")`);
  if (classUri) {
    filters.push(`?classUri = ${classUri}`);
    filters.push(`?classLabel != ""`);
  }
  if (filters.length) return `FILTER( ${filters.join(' && ')} `;
  return ''
}
