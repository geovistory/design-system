import { newSpecPage } from '@stencil/core/testing';
import { GeovEntityLabel } from '../geov-data-fetch-example';

describe('geov-entity-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GeovEntityLabel],
      html: `<geov-entity-label></geov-entity-label>`,
    });
    expect(page.root).toEqualHtml(`
      <geov-entity-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </geov-entity-label>
    `);
  });
});
