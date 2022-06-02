import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-button',
  styleUrl: 'geov-button.css',
  shadow: false,
})
export class GeovButton {

  @Prop() href?: string = '';
  @Prop() rounded: boolean = false;
  @Prop() leftIcon: string = '';
  @Prop() rightIcon: string = '';

  // variant
  @Prop() solid: boolean = false;
  @Prop() outline: boolean = false;
  @Prop() ghost: boolean = false;

  // other css properties
  @Prop() geovStyle: string = ''



  render() {

    const opt = {};
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    const icon = this.leftIcon || this.rightIcon;

    // to be able to add directly as html attribute:
    const leftIcon = {}
    if(this.leftIcon) leftIcon[this.leftIcon] = ''
    const rightIcon = {}
    if(this.rightIcon) rightIcon[this.rightIcon] = ''

    return (
      <Host style={{...opt}}>
        <a href={this.href}>
          <button
            type='button'
            class={'geov-button ' + this.getVariant() + (icon ? ' icon' : '') + (this.rounded ? ' rounded' : '')}
          >
              <geov-row>
                {this.leftIcon ? <geov-icon {...leftIcon} medium style={{ paddingRight: '1rem' }}></geov-icon> : ''}
                <geov-text><slot></slot></geov-text>
                {this.rightIcon? <geov-icon {...rightIcon} medium style={{ paddingLeft: '1rem' }}></geov-icon> : ''}
              </geov-row>
          </button>
        </a>
      </Host>
    )
  }

  getVariant() {
    if (this.solid) return 'solid'
    if (this.outline) return 'outline'
    if (this.ghost) return 'ghost'

    // default
    return 'solid'
  }

}
