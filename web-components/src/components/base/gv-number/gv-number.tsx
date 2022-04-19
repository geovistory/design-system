import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'gv-number',
  styleUrl: 'gv-number.css',
})
export class GvNumber {

  @Prop() attributeNumber: number;

  render() {

    return (
      <Host>
        <h1>Attribute number: {this.attributeNumber}</h1>
        <h1>Slot number: <slot></slot></h1>
      </Host>
    );
  }

}
