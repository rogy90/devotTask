
import { test } from '@playwright/test';
import SearchPage from '../pages/SearchPage';

test('search and select a product', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await page.goto('https://automationteststore.com/');
  await searchPage.searchForProduct('cream');
  await searchPage.sortProductsBy('pd.name-ASC');
  await searchPage.selectProduct();
});
