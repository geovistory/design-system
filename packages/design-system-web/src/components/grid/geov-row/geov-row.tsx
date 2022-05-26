import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-row',
  styleUrl: 'geov-row.css',
  shadow: false,
})
export class GeovRow {

  @Prop() justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between'

  render() {

    return (
      <Host
        class={'row'}
        style={{ justifyContent: this.justify }}>
        <slot />
      </Host>
    );
  }

}
