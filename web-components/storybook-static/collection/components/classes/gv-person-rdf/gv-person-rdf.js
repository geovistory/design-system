import { Component, Host, h, Prop } from '@stencil/core';
export class GvPersonRdf {
  constructor() {
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
      headers: { 'Accept': 'application/rdf+json' }
    }).then(r => r.text());
    console.log(this.rdf);
  }
  render() {
    return (h(Host, null,
      h("span", { style: { 'white-space': 'pre-wrap' } }, this.rdf)));
  }
  static get is() { return "gv-person-rdf"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gv-person-rdf.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gv-person-rdf.css"]
  }; }
  static get properties() { return {
    "pkEntity": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "pk-entity",
      "reflect": false
    }
  }; }
}
