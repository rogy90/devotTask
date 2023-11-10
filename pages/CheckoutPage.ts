import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  page: Page;
  productPageLink: string;
  sizeOptionSelect: Locator;
  quantityInput: Locator;
  addToCartLink: Locator;
  checkoutButton: Locator;
  confirmOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productPageLink = 'https://automationteststore.com/index.php?rt=product/product&product_id=80';
    this.sizeOptionSelect = page.locator('#option321');
    this.quantityInput = page.locator('#product_quantity');
    this.addToCartLink = page.getByRole('link', { name: 'Add to Cart' });
    this.checkoutButton = page.locator('#cart_checkout2');
    this.confirmOrderButton = page.getByRole('button', { name: ' Confirm Order' });
  }

  async navigateToProductPage(): Promise<void> {
    await this.page.goto(this.productPageLink);
  }

  async selectProduct(size: string, quantity: string): Promise<void> {
    await this.sizeOptionSelect.selectOption(size);
    await this.quantityInput.fill(quantity);
  }

  async addToCartAndCheckout(): Promise<void> {
    await this.addToCartLink.click();
    await this.checkoutButton.click();
    await this.confirmOrderButton.click();
  }

  async verifyOrderSuccess(): Promise<void> {
    await expect(this.page.getByText('Your Order Has Been Processed!')).toBeVisible();
  }
}

export default CheckoutPage;
