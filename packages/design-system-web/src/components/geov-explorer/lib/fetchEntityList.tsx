import { FetchResponse } from '../../../lib/FetchResponse';
import { SparqlBinding, sparqlJson } from '../../../lib/sparqlJson';
import { GeovEntityListItem } from '../../geov-entity-list/geov-entity-list';
import { getTextFilter } from './getTextFilter';
export type EntityListData = FetchResponse & { items?: GeovEntityListItem[]; error?: boolean };
export function createFilter(searchString: string) {
  const filters = [];
  if (searchString) filters.push(`regex(?entityLabel, "^${searchString}", "i")`);
  return `FILTER( ${filters.join(' && ')} )`;
}

export const getQuery = (searchString: string, classUri: string, classLabel: string, limit: number, offset: number) => {
  return `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX text: <http://jena.apache.org/text#>

SELECT DISTINCT ?entityUri ?entityLabel  (<${classUri}> as ?classUri)  ("${classLabel}" as ?classLabel)
WHERE {
  ${searchString ? `(?entityUri) text:query ('*${getTextFilter(searchString)}*') . ` : ``}
  ?entityUri rdfs:label ?entityLabel .
  ?entityUri a <${classUri}> .
}
# ORDER BY ASC(?entityLabel)
LIMIT ${limit}
OFFSET ${offset}
`;
};

export async function fetchEntityList(sparqlEndpoint: string, searchString: string, classUri: string, classLabel: string, limit: number, offset: number) {
  return sparqlJson<{ entityLabel: SparqlBinding<string>; entityUri: SparqlBinding<string>; classLabel: SparqlBinding<string>; classUri: SparqlBinding<string> }>(
    sparqlEndpoint,
    getQuery(searchString, classUri, classLabel, limit, offset),
  )
    .then(res => {
      // process and return the data in case of success
      const x: EntityListData = {
        items: res?.results?.bindings?.map(b => ({ classLabel: b.classLabel.value, entityLabel: b.entityLabel.value, entityUri: b.entityUri.value, classUri: b.classUri.value })),
        loading: false,
      };
      return x;
    })
    .catch(_ => {
      // process and return the data in case of error
      const x: EntityListData = {
        error: true,
        loading: false,
      };
      return x;
    });
}
