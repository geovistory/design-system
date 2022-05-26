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

  render() {
    return (
      <Host>
        <geov-column
          class={'card'}
          style={{ 
            height: this.height, 
            width: this.width ,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
          }}
          justify={this.justify}
        >
          <slot></slot>
        </geov-column>
      </Host>
    );
  }

}
