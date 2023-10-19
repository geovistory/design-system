import { Component, Host, h, Prop } from '@stencil/core';
import type { Parser } from '@triply/yasr';

/**
 * This component is used by Yasgui as a plugin. It consumes the data from Yasgui.
 *
 * The result is displayed as circles of different sizes on a map.
 */
@Component({
  tag: 'geov-yasgui-map-circles',
  styleUrl: 'geov-yasgui-map-circles.css',
  shadow: true,
})
export class GeovYasguiMapCircles {
  @Prop() data: Parser.Binding[];
  render() {
    return (
      <Host>
        Map circles
        {this.data.map(row => (
          <div>
            {row.label.value} – {row.lat.value}
          </div>
        ))}
        <slot></slot>
      </Host>
    );
  }
}
