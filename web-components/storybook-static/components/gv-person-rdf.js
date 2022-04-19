import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gvPersonRdfCss = ":host{display:block}";

const GvPersonRdf$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return gvPersonRdfCss; }
}, [1, "gv-person-rdf", {
    "pkEntity": [1, "pk-entity"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gv-person-rdf"];
  components.forEach(tagName => { switch (tagName) {
    case "gv-person-rdf":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GvPersonRdf$1);
      }
      break;
  } });
}

const GvPersonRdf = GvPersonRdf$1;
const defineCustomElement = defineCustomElement$1;

export { GvPersonRdf, defineCustomElement };
