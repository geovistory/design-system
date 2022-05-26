import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-link',
  styleUrl: 'geov-link.css',
  shadow: false,
})
export class GeovLink {

  @Prop() href: string

  render() {
    return (
      <Host>
        <a
          href={this.href}
          style={{ 'text-decoration': 'none' }}
          class="link"
        >
          <slot />
        </a>
      </Host>
    );
  }

}
