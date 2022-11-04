import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-display-time-datetimedescription',
  shadow: true,
})
export class GeovDisplayTimeDatetimedescription {
  @Prop() value: string;

  render() {
    return (
      <Host>
        {this.value}
        <slot></slot>
      </Host>
    );
  }

}
