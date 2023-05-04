import { FetchResponse } from '../../../lib/FetchResponse';
import { PromiseWithCancel, SparqlBinding, sparqlJson, SparqlRes } from '../../../lib/sparqlJson';
import { GeovEntityListItem } from '../../geov-entity-list/geov-entity-list';
import { getTextFilter } from './getTextFilter';
export type EntityListData = FetchResponse & { items?: GeovEntityListItem[]; error?: boolean };

export const getQuery = (searchString: string, classUris: string[], limit: number, offset: number) => {
  return `# entities
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX text: <http://jena.apache.org/text#>
  SELECT ?entityUri ?entityLabel ?classUri ?classLabel
  {
    {
    SELECT DISTINCT ?entityUri  ?entityLabel ?classUri ?classLabel {
        {
          SELECT DISTINCT ?entityUri ?entityLabel ?classUri
          {
              {
                    SELECT ?entityUri  ?entityLabel
                    {
                        ${searchString ? `(?entityUri) text:query ('${getTextFilter(searchString)}') . ` : ``}

                        ${
                          !classUris?.length
                            ? `
                        {
                          {
                            SELECT DISTINCT  ?classWithInstances
                            WHERE {
                              ?entityUri a ?classWithInstances .
                            }
                            GROUP BY ?classWithInstances
                          }
                        }
                        {?entityUri a ?classWithInstances .}
                        `
                            : ``
                        }

                        ${classUris.map(x => `{?entityUri a <${x}> .}`).join('\nUNION\n')}
                        OPTIONAL {?entityUri rdfs:label ?entityLabel .}

                  }
                  LIMIT ${limit}
                  OFFSET ${offset}
              }
              ?entityUri a ?classUri .
          }
        }
        OPTIONAL { ?classUri rdfs:label ?classLabel .}
      }
      HAVING (?classLabel!="")
    }
  }
`;
};
interface Bindings {
  entityLabel: SparqlBinding;
  entityUri: SparqlBinding;
  classLabel: SparqlBinding;
  classUri: SparqlBinding;
}

export class EntityListFetcher {
  public promiseWithCancel: PromiseWithCancel<SparqlRes<Bindings>>;

  async fetch(sparqlEndpoint: string, searchString: string, classUris: string[], limit: number, offset: number) {
    this.promiseWithCancel = sparqlJson<Bindings>(sparqlEndpoint, getQuery(searchString, classUris, limit, offset));
    return this.promiseWithCancel
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
}
