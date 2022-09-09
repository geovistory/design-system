import { newSpecPage } from '@stencil/core/testing';
import { GeovDataFetchExample } from '../geov-data-fetch-example';

describe('geov-data-fetch-example', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GeovDataFetchExample],
      html: `<geov-data-fetch-example></geov-data-fetch-example>`,
    });
    expect(page.root).toEqualHtml(`
      <geov-data-fetch-example>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </geov-data-fetch-example>
    `);
  });
});
