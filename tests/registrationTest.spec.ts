// registrationTest.spec.ts
import { test } from '@playwright/test';
import RegistrationPage from '../pages/RegistrationPage';
import * as testData from '../utilities/testData';

test('User registration with fulfilling only required fields', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  await page.goto('/');
  await registrationPage.goToRegistrationPage();
  await registrationPage.fillRegistrationForm(testData.firstName, testData.lastName, testData.getUniqueEmail(), testData.address,  testData.city, testData.zoneId, 
  testData.postcode, testData.getUniqueLoginName(), testData.password);
  await registrationPage.submitForm();
  await registrationPage.verifyRegistrationSuccess();
  await page.close();
});