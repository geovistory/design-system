import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'geov-entity-timeline',
  styleUrl: 'geov-entity-timeline.css',
  shadow: true,
})
export class GeovEntityTimeline {
  render() {
    return (
      <Host>
        <geov-mermaid>{`
        pie title Pets adopted by volunteers
          "Dogs" : 386
          "Cats" : 85
          "Rats" : 15
        `}</geov-mermaid>
        <slot></slot>
      </Host>
    );
  }
}
