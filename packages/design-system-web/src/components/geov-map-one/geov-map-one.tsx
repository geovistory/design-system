import { Component, Host, h, Prop } from '@stencil/core';
import type { Parser } from '@triply/yasr';

@Component({
  tag: 'geov-map-one',
  styleUrl: 'geov-map-one.css',
  shadow: true,
})
export class GeovMapOne {
  @Prop() data: Parser.Binding[];
  render() {
    return (
      <Host>
        Map One
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
