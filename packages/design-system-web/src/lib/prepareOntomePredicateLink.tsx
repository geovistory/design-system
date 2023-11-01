/**
 * In case a Ontome Property URI ends on i, it removes the i
 *
 * Example: https://ontome.net/ontology/p1234i -> https://ontome.net/ontology/p1234
 * @param predicateUri
 * @returns
 */
export function prepareOntomePredicateLink(predicateUri: string): string {
  if (!predicateUri.startsWith('https://ontome.net/ontology/p')) return predicateUri;
  return predicateUri.endsWith('i') ? predicateUri.slice(0, -1) : predicateUri;
}
