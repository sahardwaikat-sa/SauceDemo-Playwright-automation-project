/**
 * Shared behaviour for every page object.
 * Rules: no assertions here, and no page-specific locators.
 */
export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {string} path Path relative to baseURL, e.g. '/cart.html'
   */
  constructor(page, path) {
    this.page = page;
    this.path = path;
  }

  /** Opens this page. baseURL from playwright.config.js is prepended. */
  async goto() {
    await this.page.goto(this.path);
  }

  async reload() {
    await this.page.reload();
  }

  /** @returns {string} The current URL, handy for building assertions in tests. */
  url() {
    return this.page.url();
  }

  /** @returns {Promise<string>} The document title. */
  async title() {
    return this.page.title();
  }

  /**
   * Shortcut for SauceDemo's data-test attributes, so child pages
   * write this.byTestId('username') instead of this.page.getByTestId(...).
   * @param {string} id
   */
  byTestId(id) {
    return this.page.getByTestId(id);
  }
}