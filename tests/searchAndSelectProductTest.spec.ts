import { test } from '@playwright/test';
import SearchPage from '../pages/SearchPage';
import * as testData from '../utilities/testData';

test('Search by category, sort and choose a product', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await page.goto('/');
  await searchPage.searchForProduct(testData.searchKeywords);
  await searchPage.sortProductsBy('pd.name-ASC');
  await searchPage.selectProduct();
});