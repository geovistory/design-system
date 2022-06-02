import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-column',
  styleUrl: 'geov-column.css',
  shadow: false,
})
export class GeovColumn {

  // justify
  @Prop() start: boolean = false
  @Prop() end: boolean = false
  @Prop() center: boolean = false
  @Prop() spaceAround: boolean = false
  @Prop() spaceBetween: boolean = false

  // width and height
  @Prop() fh: boolean = false // full height
  @Prop() fw: boolean = false // full width

  // perpendicular direction
  @Prop() alignStart: boolean = false
  @Prop() alignCenter: boolean = false
  @Prop() alignEnd: boolean = false

  // other css properties
  @Prop() geovStyle: string = ''


  render() {

    const opt = {};

    // width and height
    if (this.fh) opt['height'] = '100%'
    if (this.fw) opt['width'] = '100%'

    // other css properties
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    return (
      <Host
        class={'column'}
        style={{
          justifyContent: this.getJustifyContent(),
          alignItems: this.getAlignItems(),
          ...opt
        }}>
        <slot />
      </Host>
    );
  }

  getJustifyContent() {
    if (this.start) return 'start'
    if (this.center) return 'center'
    if (this.end) return 'end'
    if (this.spaceAround) return 'space-around'
    if (this.spaceBetween) return 'space-between'

    // default
    return 'center'
  }

  getAlignItems() {
    if (this.alignCenter) return 'center'
    if (this.alignStart) return 'start'
    if (this.alignEnd) return 'end'

    // default
    return ''
  }

}
