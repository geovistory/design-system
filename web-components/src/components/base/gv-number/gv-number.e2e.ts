import { newE2EPage } from '@stencil/core/testing';

describe('gv-number', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gv-number></gv-number>');

    const element = await page.find('gv-number');
    expect(element).toHaveClass('hydrated');
  });
});
