import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-display-geosparl-wktliteral',
  shadow: true,
})
export class GeovDisplayGeosparlWktliteral {

  /**
  */
  @Prop() value: string;

  render() {

    //<http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)
    var coord = this.value.replace("<http://www.opengis.net/def/crs/EPSG/0/4326>POINT(", "");
    coord = coord.replace(")", "");
    var coordonnees = coord.split(" ");

    return (
      <Host>
        long: {coordonnees[0]}<br/>lat: {coordonnees[1]}
        <slot></slot>
      </Host>
    );
  }

}
