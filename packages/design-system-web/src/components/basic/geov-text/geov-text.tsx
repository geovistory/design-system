import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-text',
  styleUrl: 'geov-text.css',
  shadow: false,
})
export class GeovText {
  // variant 
  @Prop() subtitle: boolean = false;
  @Prop() description: boolean = false;
  @Prop() text: boolean = false;
  @Prop() caption: boolean = false;

  //justify 
  @Prop() start: boolean = false;
  @Prop() center: boolean = false;
  @Prop() end: boolean = false;

  //colors
  @Prop() light: boolean = false

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
      <Host class={this.getVariant() + ' ' + this.getColor()} style={{margin: 'auto', ...opt}}>
        <p style={{
          margin: "0",
          textAlign: this.getJustify(),
        }}><slot /></p>
      </Host>
    );
  }

  getJustify() {
    if (this.start) return 'left'
    if (this.center) return 'center'
    if (this.end) return 'right'

    // default
    return 'center'
  }

  getVariant() {
    if (this.subtitle) return 'subtitle'
    if (this.description) return 'description'
    if (this.text) return 'text'
    if (this.caption) return 'caption'

    // default
    return 'center'
  }

  getColor() {
    if (this.light) return 'light';

    // default
    return ''
  }

}
