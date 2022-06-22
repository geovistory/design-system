export async function sparqlJson(url: string, query: string) {
  const params = new URLSearchParams({ query: query });
  const res = await fetch(`${url}?${params}`, {
    method: 'GET',
    headers: {
      Accept: 'application/sparql-results+json',
    },
    redirect: 'follow',
  });
  return res.json();
}
