
import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CheckoutPage  from '../pages/CheckoutPage';
import * as testData from '../utilities/testData';

test('Login as user and complete a checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await page.goto('/');
  await loginPage.accountLink.click();
  await loginPage.login(testData.loginUsername, testData.loginPassword);
  await checkoutPage.navigateToProductPage();
  await checkoutPage.selectProduct(testData.productQuantity);
  await checkoutPage.addToCartAndCheckout();
  await checkoutPage.verifyOrderSuccess();
  await page.close();
});