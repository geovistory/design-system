import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-display-geosparql-wktliteral',
  shadow: true,
})
export class GeovDisplayGeosparqlWktliteral {
  /**
   * the opengis value
   */
  @Prop() value: string;

  render() {
    //http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)
    let coord = this.value.replace('http://www.opengis.net/def/crs/EPSG/0/4326>POINT(', '');
    coord = coord.replace(')', '');
    const coordonnees = coord.split(' ');

    return (
      <Host>
        long: {coordonnees[0]}
        <br />
        lat: {coordonnees[1]}
        <slot></slot>
      </Host>
    );
  }
}
