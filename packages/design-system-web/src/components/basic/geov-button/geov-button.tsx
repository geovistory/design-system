import { Component, Host, h, Prop } from '@stencil/core';
import { IconNames, IconSizes } from '../geov-icon/geov-icon';

@Component({
  tag: 'geov-button',
  styleUrl: 'geov-button.css',
  shadow: false,
})
export class GeovButton {

  @Prop() variant: 'solid' | 'outline' | 'ghost' | 'solid' = 'solid';
  @Prop() rounded: boolean;
  @Prop() href?: string;
  @Prop() icon?: IconNames;
  @Prop() iconSize?: IconSizes = 'medium';
  @Prop() iconPos: 'start' | 'end' = 'start';

  render() {

    return (
      <Host>
        <a href={this.href}>
          <button
            type='button'
            class={'geov-button ' + this.variant + (this.icon ? ' icon' : '') + (this.rounded ? ' rounded' : '')}
          >
            {this.icon ?
              // If there is a prefix icon
              <geov-row>
                {this.iconPos == 'start' ? <geov-icon name={this.icon} size={this.iconSize} style={{ paddingRight: '1rem' }}></geov-icon> : ''}
                <geov-text><slot></slot></geov-text>
                {this.iconPos == 'end' ? <geov-icon name={this.icon} size={this.iconSize} style={{ paddingLeft: '1rem' }}></geov-icon> : ''}
              </geov-row>
              :
              // just a simple button
              <geov-text><slot></slot></geov-text>
            }
          </button>
        </a>
      </Host>
    )
  }

}
