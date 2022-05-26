import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-navbar',
  styleUrl: 'geov-navbar.css',
  shadow: true,
})
export class GeovNavbar {

  @Prop() logo: string;
  @Prop() links1: Array<string>;
  @Prop() links2: Array<string>;
  @Prop() height: string;


  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
