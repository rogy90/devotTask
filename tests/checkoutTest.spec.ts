
import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CheckoutPage  from '../pages/CheckoutPage';

test('Login as user and complete a checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await page.goto('https://automationteststore.com/');
  await loginPage.accountLink.click();
  await loginPage.login('testAcc', 'StrongPass1!');
  await checkoutPage.navigateToProductPage();
  await checkoutPage.selectProduct('664', '2');
  await checkoutPage.addToCartAndCheckout();
  await checkoutPage.verifyOrderSuccess();
});
