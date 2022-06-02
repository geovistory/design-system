import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-link',
  styleUrl: 'geov-link.css',
  shadow: false,
})
export class GeovLink {

  @Prop() href: string

  // colors
  @Prop() light: boolean
  @Prop() grey: boolean

  // other css properties
  @Prop() geovStyle: string = ''

  render() {

    const opt = {};
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    return (
      <Host style={{...opt}}>
        <a
          href={this.href}
          style={{ 'text-decoration': 'none', color: this.light ? '#D6BCFA' : '' }}
          class={'link ' + this.getColor()}
        >
          <slot />
        </a>
      </Host>
    );
  }

  getColor() {
    if (this.light) return 'light'
    if (this.grey) return 'grey'

    //default 
    return ''
  }

}
