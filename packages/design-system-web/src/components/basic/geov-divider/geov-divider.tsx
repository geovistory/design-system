import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-divider',
  styleUrl: 'geov-divider.css',
  shadow: false,
})
export class GeovDivider {

  @Prop() height: string;
  @Prop() width: string;

  // way
  @Prop() horizontal: boolean;
  @Prop() vertical: boolean

  // other css properties
  @Prop() geovStyle: string = ''


  render() {    

    const opt = {};
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    if (!this.width) this.width = this.vertical ? '0px' : '100%';
    if (!this.height) this.height = this.vertical ? '100%' : '0px';
    
    return (
      <Host style={{...opt}}>
        <div class={'divider'} style={{height: this.height, width: this.width}}></div>
      </Host>
    );
  }

}
