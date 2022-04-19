import { r as registerInstance, h, H as Host } from './index-e81b4cbd.js';

const gvPersonRdfCss = ":host{display:block}";

const GvPersonRdf = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.SPARQL_endpoint = "https://sparql-dev.geovistory.org/project-924033";
    this.query = `
    CONSTRUCT {
        <http://geovistory.org/resource/{{this.pkEntity}}> <https://ontome.net/property/1762> ?o1 .
        <http://geovistory.org/resource/{{this.pkEntity}}> <http://www.w3.org/2000/01/rdf-schema#label> ?o2 .
      } WHERE { 
            <http://geovistory.org/resource/{{this.pkEntity}}> <https://ontome.net/property/1762> ?o1 .
            <http://geovistory.org/resource/{{this.pkEntity}}> <http://www.w3.org/2000/01/rdf-schema#label> ?o2 .
      }
  `;
  }
  async componentWillLoad() {
    // rework query
    this.query = encodeURIComponent(this.query.replace(/\s+/g, ' ')
      .trim()
      .replace(/{{this.pkEntity}}/g, this.pkEntity + ''));
    this.rdf = await fetch(this.SPARQL_endpoint + '?query=' + this.query, {
      method: 'POST',
      headers: { 'Accept': 'text/turtle' }
    }).then(r => r.text());
    console.log(this.rdf);
  }
  render() {
    return (h(Host, null, h("span", { style: { 'white-space': 'pre-wrap' } }, this.rdf)));
  }
};
GvPersonRdf.style = gvPersonRdfCss;

export { GvPersonRdf as gv_person_rdf };
