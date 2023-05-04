export interface SparqlRes<T> {
  results?: {
    bindings?: T[];
  };
}

export interface SparqlBinding {
  'value': string;
  'type': string;
  'datatype'?: string;
  'xml:lang'?: string;
}
export interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}
export function sparqlJson<T>(url: string, query: string): PromiseWithCancel<SparqlRes<T>> {
  const params = new URLSearchParams({ query: query });
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = new Promise(async resolve => {
    try {
      const res = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          Accept: 'application/sparql-results+json',
        },
        redirect: 'follow',
        signal,
      });
      const data = await res.json();
      resolve(data);
    } catch (ex: unknown) {
      if (isAbortError(ex)) {
        console.log(ex.message);
      } else {
        console.log(ex);
      }
    }
  });
  (promise as PromiseWithCancel<SparqlRes<T>>).cancel = () => controller.abort();
  return promise as PromiseWithCancel<SparqlRes<T>>;
}

function isAbortError(error: any): error is DOMException {
  if (error && error.name === 'AbortError') {
    return true;
  }
  return false;
}
