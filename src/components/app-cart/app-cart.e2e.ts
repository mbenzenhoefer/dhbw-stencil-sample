import { newE2EPage } from '@stencil/core/testing';

describe('app-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-cart></app-cart>');

    const element = await page.find('app-cart');
    expect(element).toHaveClass('hydrated');
  });
});
