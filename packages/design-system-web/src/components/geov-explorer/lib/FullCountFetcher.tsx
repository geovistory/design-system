import { FetchResponse } from '../../../lib/FetchResponse';
import { PromiseWithCancel, SparqlBinding, sparqlJson, SparqlRes } from '../../../lib/sparqlJson';
export type FullCountData = FetchResponse & { count?: number; error?: boolean };

// export const getQuery = (searchString: string, classUris: string[]) => {
//   return `# count
// PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
// PREFIX ontome: <https://ontome.net/ontology/>
// PREFIX text: <http://jena.apache.org/text#>

// SELECT (count(distinct ?entityUri) as ?count)
// WHERE {
//   ${searchString ? `(?entityUri) text:query ('${getTextFilter(searchString)}') . ` : ``}

//   ${
//     !classUris?.length
//       ? `
//           {
//             {
//               SELECT DISTINCT  ?classWithInstances
//               WHERE {
//                  ?entityUri a ?classWithInstances .
//               }
//               GROUP BY ?classWithInstances
//             }
//           }
//           {?entityUri a ?classWithInstances .}
//           `
//       : `${classUris.map(x => `{?entityUri a <${x}> .}`).join('\nUNION\n')}`
//   }
// }
// `;
// };

export const getQuery = (searchString: string, classUris: string[]) => {
  console.log('classUris', classUris);
  return `# count
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT (COUNT(DISTINCT ?entity) AS ?count)
WHERE {
  ?entity rdfs:label ?label .
  FILTER(CONTAINS(LCASE(STR(?label)), "${searchString.toLowerCase()}"))
}`;
};
interface Bindings {
  count: SparqlBinding;
}
export class FullCountFetcher {
  public promiseWithCancel: PromiseWithCancel<SparqlRes<Bindings>>;

  async fetch(sparqlEndpoint: string, searchString: string, classUris: string[]) {
    this.promiseWithCancel = sparqlJson<Bindings>(sparqlEndpoint, getQuery(searchString, classUris));
    return this.promiseWithCancel
      .then(res => {
        // process and return the data in case of success
        const x: FullCountData = {
          count: Number(res?.results?.bindings?.[0]?.count.value),
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
}
