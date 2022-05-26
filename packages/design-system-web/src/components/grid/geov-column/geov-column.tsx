import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-column',
  styleUrl: 'geov-column.css',
  shadow: false,
})
export class GeovColumn {

  @Prop() justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between'

  render() {

    return (
      <Host
        class={'column'}
        style={{ justifyContent: this.justify }}>
        <slot />
      </Host>
    );
  }

}
