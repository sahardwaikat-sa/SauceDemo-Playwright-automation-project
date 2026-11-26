import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, '/');

    // Locators (SauceDemo exposes data-test attributes)
    this.usernameInput = this.byTestId('username');
    this.passwordInput = this.byTestId('password');
    this.loginButton = this.byTestId('login-button');
    this.errorMessage = this.byTestId('error');
  }

  /** Types credentials and submits. */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /** @param {{ username: string, password: string }} credentials */
  async loginAs(credentials) {
    await this.login(credentials.username, credentials.password);
  }
}