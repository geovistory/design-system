import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-divider',
  styleUrl: 'geov-divider.css',
  shadow: false,
})
export class GeovDivider {

  @Prop() horizontal: boolean;
  @Prop() vertical: boolean
  @Prop() height: string;
  @Prop() width: string;

  render() {    
    if (!this.width) this.width = this.vertical ? '0px' : '100%';
    if (!this.height) this.height = this.vertical ? '100%' : '0px';
    return (
      <Host class={'divider ' + (this.horizontal ? 'horizontal' : 'vertical')} style={{height: this.height, width: this.width}}>
        <slot></slot>
      </Host>
    );
  }

}
