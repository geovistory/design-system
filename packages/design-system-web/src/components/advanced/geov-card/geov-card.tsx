import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-card',
  styleUrl: 'geov-card.css',
  shadow: false,
})
export class GeovCard {

  @Prop() width: string;
  @Prop() height: string;
  @Prop() justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' = 'center'

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
        <geov-column
          class={'card'}
          style={{ 
            height: this.height, 
            width: this.width ,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
          }}
          
          {...{[this.justify]: ''}}
        >
          <slot></slot>
        </geov-column>
      </Host>
    );
  }

}
