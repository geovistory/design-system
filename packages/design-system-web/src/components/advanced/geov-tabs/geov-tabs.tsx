import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'geov-tabs',
  styleUrl: 'geov-tabs.scss',
  shadow: true,
})
export class GeovTabs {

  render() {
    return (
      <Host>
        <div class="tabs">
          <ul>
            <li class="is-active"><a>Pictures</a></li>
            <li><a>Music</a></li>
            <li><a>Videos</a></li>
            <li><a>Documents</a></li>
          </ul>
        </div>

        <button class="button is-primary"></button>
      </Host>
    );
  }

}
