import { Component, Host, h, Prop } from '@stencil/core';

const query = (id: string) => `
# check if geov:${id} is annotated entity (ontome:p1875)
# of an annotation in text (ontome:p1875)
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>
SELECT  ((count(?subject ) > 0)as ?condition)
WHERE {
  ?subject ontome:p1875 geov:${id} .
  ?subject a ontome:c933
}
GROUP BY ?subject
LIMIT 1
`;

@Component({
  tag: 'geov-if-entity-is-annotated',
  styleUrl: 'geov-if-entity-is-annotated.css',
  shadow: true,
})
export class GeovIfEntityIsAnnotated {
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * entityId
   * ID number of entity, e.g. 'i315800'
   */
  @Prop({mutable:true}) entityId: string;

  render() {
    const sparqlQuery= query(this.entityId)
    console.log(sparqlQuery)
    return (
      <Host>
        <geov-if sparql-endpoint={this.sparqlEndpoint} sparql-query={sparqlQuery}>
          <slot></slot>
        </geov-if>
      </Host>
    );
  }
}
