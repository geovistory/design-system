import { Component, Host, h, Prop } from '@stencil/core';
import type { Parser } from '@triply/yasr';

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
