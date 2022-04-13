import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gv-button',
  styleUrl: 'gv-button.css',
  shadow: true,
})
export class GvButton {

  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
