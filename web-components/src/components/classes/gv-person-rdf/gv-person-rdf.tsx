import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'gv-person-rdf',
  styleUrl: 'gv-person-rdf.css',
  shadow: true,
})
export class GvPersonRdf {

  @Prop() pkEntity: string;

  SPARQL_endpoint = "https://sparql-dev.geovistory.org/project-924033";
  query = `
    CONSTRUCT {
        <http://geovistory.org/resource/{{this.pkEntity}}> <https://ontome.net/property/1762> ?o1 .
        <http://geovistory.org/resource/{{this.pkEntity}}> <http://www.w3.org/2000/01/rdf-schema#label> ?o2 .
      } WHERE { 
            <http://geovistory.org/resource/{{this.pkEntity}}> <https://ontome.net/property/1762> ?o1 .
            <http://geovistory.org/resource/{{this.pkEntity}}> <http://www.w3.org/2000/01/rdf-schema#label> ?o2 .
      }
  `
  rdf: string;


  async componentWillLoad() {
    // rework query
    this.query = encodeURIComponent(this.query.replace(/\s+/g, ' ')
      .trim()
      .replace(/{{this.pkEntity}}/g, this.pkEntity + '')
    )

    this.rdf = await fetch(this.SPARQL_endpoint + '?query=' + this.query, {
      method: 'POST',
      headers: { 'Accept': 'text/turtle' }
    }).then(r => r.text())

    console.log(this.rdf)
  }

  render() {
    return (
      <Host>
        <span style={{'white-space': 'pre-wrap'}}>
        {this.rdf}
        </span>
      </Host>
    );
  }

}
