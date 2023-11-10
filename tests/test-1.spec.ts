import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://automationteststore.com/');
  await page.getByRole('link', { name: 'Login or register' }).click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('#AccountFrm_firstname').click();
  await page.locator('#AccountFrm_firstname').fill('Igor');
  await page.locator('#AccountFrm_lastname').click();
  await page.locator('#AccountFrm_lastname').fill('Test');
  await page.locator('#AccountFrm_email').click();
  await page.locator('#AccountFrm_email').fill('test@test.com');
  await page.locator('#AccountFrm_address_1').click();
  await page.locator('#AccountFrm_address_1').fill('Street 1');
  await page.locator('#AccountFrm_city').click();
  await page.locator('#AccountFrm_city').fill('City');
  await page.locator('#AccountFrm_zone_id').selectOption('3513');
  await page.locator('#AccountFrm_postcode').click();
  await page.locator('#AccountFrm_postcode').fill('100000');
  await page.locator('#AccountFrm_loginname').click();
  await page.locator('#AccountFrm_loginname').fill('testAcc');
  await page.locator('#AccountFrm_password').click();
  await page.locator('#AccountFrm_password').fill('StrongPass1!');
  await page.locator('#AccountFrm_confirm').click();
  await page.locator('#AccountFrm_confirm').fill('StrongPass1!');
  await page.getByLabel('I have read and agree to the Privacy Policy').check();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('#AccountFrm_password').click();
  await page.locator('#AccountFrm_password').fill('StrongPass1!');
  await page.locator('#AccountFrm_confirm').click();
  await page.locator('#AccountFrm_confirm').fill('StrongPass1!');
  await page.locator('#AccountFrm_password').click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByText('Your Account Has Been Created!').click();

});