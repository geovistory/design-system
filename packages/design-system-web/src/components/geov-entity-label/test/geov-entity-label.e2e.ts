import { newE2EPage } from '@stencil/core/testing';

describe('geov-entity-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<geov-entity-label></geov-entity-label>');

    const element = await page.find('geov-entity-label');
    expect(element).toHaveClass('hydrated');
  });
});
