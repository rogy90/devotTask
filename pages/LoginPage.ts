import { Page, Locator } from '@playwright/test';

class LoginPage {
    page: Page;
    accountLink: Locator;
    loginNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.accountLink = page.getByRole('link', { name: 'Login or register' });
      this.loginNameInput = page.locator('#loginFrm_loginname');
      this.passwordInput = page.locator('#loginFrm_password');
      this.loginButton = page.getByRole('button', { name: 'Login' });
    }
  
    async navigateToLoginPage() {
      await this.accountLink.click();
    }
  
    async login(username : string, password : string) {
      await this.loginNameInput.click();
      await this.loginNameInput.fill(username);
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  
  export default LoginPage;