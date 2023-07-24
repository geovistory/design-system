import { h } from '@stencil/core';
import { stencilWrapper } from '../../.storybook/lib/stencilWrapper';

export default {
  title: 'Design/Typography',
  parameters: {
    previewTabs: {
      'docs': { hidden: true },
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    options: { showPanel: true },
  },
};

const css1 = `/* max-width and margin make the fluid layout. */
p, h1, h2, h3, h4, h5, h6 {
  max-width: 38rem;
  margin:auto;
}`;

export const Typography = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Typography</h1>
        <p class="lead">This page is about the typography of this documentation. This paragraph is a lead text. It tells the reader, what a page is about.</p>
        <h2>Widths</h2>
        <h3>Texts</h3>
        <p>
          The maximum width of headers and paragraphs is 38rem. This limits the maximum number of characters per line to ~76 characters for texts with font size 1rem, even on large
          screens.
        </p>
        <p>
          <geov-code language="css" code={css1}></geov-code>
        </p>
        <p>Therefore paragraphs and headers may have a smaller width than their container.</p>
        <h3>Container width</h3>
        <p> The following box is expanding to the full width of the container.</p>
        <div style={{ background: '#f6f2f0', padding: '.5rem' }}>
          <p>Box expanding to the container width. Play with disyplay sizes, to see the effect.</p>
        </div>
        <h1>Header 1 (h1)</h1>

        <h2>Header 2 (h2)</h2>

        <h3>Header 3 (h3)</h3>

        <h4>Header 4 (h4)</h4>

        <h5>Header 5 (h5)</h5>

        <h6>Header 6 (h6)</h6>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
