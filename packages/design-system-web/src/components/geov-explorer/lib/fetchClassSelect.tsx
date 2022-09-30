import { FetchResponse } from '../../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../../lib/sparqlJson';
import { GeovClassSelectItem } from '../../geov-class-select/geov-class-select';
import { getTextFilter } from './getTextFilter';
export type ClassSelectData = FetchResponse & { items?: GeovClassSelectItem[]; error?: boolean };
export const getQuery = (searchString?: string) => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX text: <http://jena.apache.org/text#>

SELECT ?class ?label ?count
WHERE {
  ?class rdfs:label ?label
  {
    SELECT  ?class (count(distinct ?entityUri) as ?count)
    WHERE {
     ${searchString ? `(?entityUri) text:query ('*${getTextFilter(searchString)}*') . ` : ``}
 	   ?entityUri a ?class .
    }
    GROUP BY ?class
    ORDER by DESC(?count)
  }
}
HAVING(?label != "")
`;

export async function fetchClassSelect(sparqlEndpoint: string, searchString: string) {
  return sparqlJson<{ class: SparqlBinding<string>; label: SparqlBinding<string>; count: SparqlBinding<number> }>(sparqlEndpoint, getQuery(searchString))
    .then(res => {
      // process and return the data in case of success
      const x: ClassSelectData = {
        items: res?.results?.bindings?.map(b => ({ classLabel: b.label.value, classUri: b.class.value, instanceCount: b.count.value })),
        loading: false,
      };
      return x;
    })
    .catch(_ => {
      // process and return the data in case of error
      const x: ClassSelectData = {
        error: true,
        loading: false,
      };
      return x;
    });
}
