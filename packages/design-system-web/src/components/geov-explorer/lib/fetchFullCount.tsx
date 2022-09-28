import { FetchResponse } from '../../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../../lib/sparqlJson';
import { getTextFilter } from './getTextFilter';
export type FullCountData = FetchResponse & { count?: number; error?: boolean };

export const getQuery = (searchString: string, classUri: string) => {
  return `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX text: <http://jena.apache.org/text#>

SELECT (count(distinct ?entityUri) as ?count)
WHERE {
  ${searchString ? `(?entityUri) text:query ('*${getTextFilter(searchString)}*') . ` : ``}
  ?entityUri rdfs:label ?entityLabel .
  ?entityUri a <${classUri}> .
}
`;
};

export async function fetchFullCount(sparqlEndpoint: string, searchString: string, classUri: string) {
  return sparqlJson<{ count: SparqlBinding<number> }>(sparqlEndpoint, getQuery(searchString, classUri))
    .then(res => {
      // process and return the data in case of success
      const x: FullCountData = {
        count: res?.results?.bindings?.[0]?.count.value,
        loading: false,
      };
      return x;
    })
    .catch(_ => {
      // process and return the data in case of error
      const x: FullCountData = {
        error: true,
        loading: false,
      };
      return x;
    });
}
