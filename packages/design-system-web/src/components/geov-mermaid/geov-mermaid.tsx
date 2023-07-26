import { Component, h, Host, State, Prop } from '@stencil/core';
import type { Mermaid } from 'mermaid';
/**
 * This is a simple wrapper around [mermaid.js](https://mermaid.js.org).
 *
 * Develop your chart in the [mermaid live editor](https://mermaid.live/) and wrap it with this component.
 */
@Component({
  tag: 'geov-mermaid',
  styleUrl: 'geov-mermaid.css',
  shadow: true,
})
export class GeovMermaid {
  slotElement: HTMLSlotElement;
  mermaid: Mermaid;
  @Prop() value = '';
  @State() svg: string;
  @State() error: string;

  async componentWillLoad() {
    const x: any = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');
    this.mermaid = x.default as Mermaid;
  }

  async componentDidLoad() {
    this.createSVG;
  }

  extractChartString(): string {
    const firstChild = this.slotElement?.assignedNodes()?.[0];
    if (firstChild?.nodeType !== 3) {
      return (this.error = 'Please place (only) the mermaid chart string in the geov-mermaid element');
    }
    return (firstChild as any).data;
  }

  async createSVG() {
    const chart = this.extractChartString();
    try {
      const { svg } = await this.mermaid.render('graphDiv', chart);
      this.svg = svg;
    } catch (error) {
      this.error = error.toString();
    }
  }

  render() {
    return (
      <Host>
        <span style={{ display: 'none' }}>
          <slot onSlotchange={() => this.createSVG()} ref={(el: HTMLSlotElement) => (this.slotElement = el)}></slot>
        </span>
        <div innerHTML={this.svg}></div>
        {this.error && <pre style={{ color: 'red' }}>{this.error}</pre>}
      </Host>
    );
  }
}
