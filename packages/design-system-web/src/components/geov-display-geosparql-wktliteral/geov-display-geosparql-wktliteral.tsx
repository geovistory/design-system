import { Color } from '@ionic/core';
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
  /**
   * Color assigned to ion-item
   */
  @Prop() color: Color = '';

  render() {
    //http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)
    let coord = this.value.replace('http://www.opengis.net/def/crs/EPSG/0/4326>POINT(', '');
    coord = coord.replace(')', '');
    const coordonnees = coord.split(' ');

    return (
      <Fragment>
        <ion-item color={this.color} lines="none">
          <ion-label>
            long: {coordonnees[0]}
            <br />
            lat: {coordonnees[1]}
          </ion-label>
        </ion-item>
      </Fragment>
    );
  }
}
