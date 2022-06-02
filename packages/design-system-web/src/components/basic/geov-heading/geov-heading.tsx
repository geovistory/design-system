import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-heading',
  styleUrl: 'geov-heading.css',
  shadow: false,
})
export class GeovHeading {

  // variant
  @Prop() h1: boolean = false;
  @Prop() h2: boolean = false;
  @Prop() h3: boolean = false;

  // color
  @Prop() light: boolean = false;

  // other css properties
  @Prop() geovStyle: string = ''


  render() {

    const opt = {};
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    if (this.h1) return <Host style={{...opt}}><h1 class={'h1 ' + this.getColor()}><slot /></h1></Host>
    if (this.h2) return <Host style={{...opt}}><h2 class={'h2 ' + this.getColor()}><slot /></h2></Host>
    if (this.h3) return <Host style={{...opt}}><h3 class={'h3 ' + this.getColor()}><slot /></h3></Host>

    //default 
    return <Host style={{...opt}}><h1 class={'h1 ' + this.getColor()}><slot /></h1></Host>
  }

  getColor() {
    if(this.light) return 'light'

    //default 
    return ''
  }
}
