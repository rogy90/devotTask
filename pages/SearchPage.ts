// SearchPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class SearchPage {
  page: Page;
  searchInput: Locator;
  categorySelect: Locator;
  sortSelect: Locator;
  productLink: Locator;
  productHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search Keywords');
    this.categorySelect = page.locator('#category_43');
    this.sortSelect = page.locator('#sort');
    this.productLink = page.getByRole('link', { name: 'Body Cream by Bulgari' });
    this.productHeading = page.getByRole('heading', { name: 'Body Cream by Bulgari' }).locator('span');
  }

  async searchForProduct(product: string): Promise<void> {
    await this.searchInput.click();
    await this.categorySelect.click();
    await this.searchInput.fill(product);
    await this.searchInput.press('Enter');
  }

  async sortProductsBy(option: string): Promise<void> {
    await this.sortSelect.selectOption(option);
  }

  async selectProduct(): Promise<void> {
    await this.productLink.click();
    await this.productHeading.click();
  }
}

export default SearchPage;
