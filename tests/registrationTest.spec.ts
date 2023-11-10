import { test, Page } from '@playwright/test';
import RegistrationPage from '../pages/RegistrationPage';

test('successful user registration', async ({ page }: { page: Page }) => {
  const registrationPage = new RegistrationPage(page);

  const randomNum = Math.floor(Math.random() * 1000000);
  const uniqueEmail = `test${randomNum}@test.com`;
  const uniqueLoginName = `testAcc${randomNum}`;
  await page.goto('https://automationteststore.com/');
  await registrationPage.goToRegistrationPage();
  await registrationPage.fillRegistrationForm('Igor', 'Test', uniqueEmail, 'Street 1', 'City', '3513', '100000', uniqueLoginName, 'StrongPass1!');
  await registrationPage.submitForm();
  await registrationPage.verifyRegistrationSuccess();
});
