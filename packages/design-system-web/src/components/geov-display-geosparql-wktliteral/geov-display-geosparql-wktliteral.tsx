import { Component, Fragment, Prop, h } from '@stencil/core';

/**
 * This Component displays the coordinates given by a WKT literal string of this form:
 *
 * `http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)`
 */
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
    let coord = this.value.replace('<http://www.opengis.net/def/crs/EPSG/0/4326>POINT(', '');
    coord = coord.replace(')', '');
    const coordonnees = coord.split(' ');

    return (
      <Fragment>
        long: {coordonnees[0]}, lat: {coordonnees[1]}
      </Fragment>
    );
  }
}
