import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-text',
  styleUrl: 'geov-text.css',
  shadow: false,
})
export class GeovText {

  @Prop() variant: 'subtitle' | 'description' | 'text' | 'caption'
  @Prop() justify: 'start' | 'center' | 'left'

  render() {
    return (
      <Host class={this.variant}>
        <p style={{margin: "0", textAlign: this.justify}}><slot /></p>
      </Host>
    );
  }

}
