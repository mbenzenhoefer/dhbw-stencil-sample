import { newE2EPage } from '@stencil/core/testing';

describe('app-product', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-product></app-product>');

    const element = await page.find('app-product');
    expect(element).toHaveClass('hydrated');
  });
});
