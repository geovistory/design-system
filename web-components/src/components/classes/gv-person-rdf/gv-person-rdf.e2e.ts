import { newE2EPage } from '@stencil/core/testing';

describe('gv-person-rdf', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gv-person-rdf></gv-person-rdf>');

    const element = await page.find('gv-person-rdf');
    expect(element).toHaveClass('hydrated');
  });
});
