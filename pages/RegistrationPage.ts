<<<<<<< HEAD

=======
// RegistrationPage.ts
>>>>>>> 1949b6e93ed5e0de8c8565dc7bf7697d9e772a5c
import { Page, Locator, expect } from '@playwright/test';

class RegistrationPage {
  page: Page;
  loginOrRegisterLink: Locator;
  continueButton: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  emailInput: Locator;
  addressInput: Locator;
  cityInput: Locator;
  zoneIdSelect: Locator;
  postcodeInput: Locator;
  loginNameInput: Locator;
  passwordInput: Locator;
  confirmPasswordInput: Locator;
  privacyPolicyCheckbox: Locator;
  finalContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginOrRegisterLink = page.getByRole('link', { name: 'Login or register' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.firstNameInput = page.locator('#AccountFrm_firstname');
    this.lastNameInput = page.locator('#AccountFrm_lastname');
    this.emailInput = page.locator('#AccountFrm_email');
    this.addressInput = page.locator('#AccountFrm_address_1');
    this.cityInput = page.locator('#AccountFrm_city');
    this.zoneIdSelect = page.locator('#AccountFrm_zone_id');
    this.postcodeInput = page.locator('#AccountFrm_postcode');
    this.loginNameInput = page.locator('#AccountFrm_loginname');
    this.passwordInput = page.locator('#AccountFrm_password');
    this.confirmPasswordInput = page.locator('#AccountFrm_confirm');
    this.privacyPolicyCheckbox = page.getByLabel('I have read and agree to the Privacy Policy');
    this.finalContinueButton = page.getByRole('button', { name: 'Continue' });
  }

  async goToRegistrationPage(): Promise<void> {
    await this.loginOrRegisterLink.click();
    await this.continueButton.click();
  }

  async fillRegistrationForm(
    firstName: string, 
    lastName: string, 
    email: string, 
    address: string, 
    city: string, 
    zoneId: string, 
    postcode: string, 
    loginName: string, 
    password: string
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.addressInput.fill(address);
    await this.cityInput.fill(city);
    await this.zoneIdSelect.selectOption(zoneId);
    await this.postcodeInput.fill(postcode);
    await this.loginNameInput.fill(loginName);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
  }

  async submitForm(): Promise<void> {
    await this.privacyPolicyCheckbox.check();
    await this.finalContinueButton.click();
  }

  async verifyRegistrationSuccess(): Promise<void> {
    await expect(this.page.getByText('Your Account Has Been Created!')).toBeVisible();
  }
}

export default RegistrationPage;
