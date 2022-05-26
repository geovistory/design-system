import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-heading',
  styleUrl: 'geov-heading.css',
  shadow: false,
})
export class GeovHeading {

  @Prop() variant: 'h1' | 'h2' | 'h3' = 'h1'

  render() {
    if(this.variant == 'h1') return <Host><h1 class={this.variant}><slot /></h1></Host> 
    if(this.variant == 'h2') return <Host><h2 class={this.variant}><slot /></h2></Host> 
    if(this.variant == 'h3') return <Host><h3 class={this.variant}><slot /></h3></Host>
  }

}
