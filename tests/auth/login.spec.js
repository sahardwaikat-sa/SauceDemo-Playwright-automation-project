import { users } from '../../src/data/users.js';
import { expect, test } from '../../src/fixtures/index.js';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('TC-LOGIN-01 standard user can log in', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.loginAs(users.standard);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('TC-LOGIN-02 locked out user sees an error', async ({ loginPage }) => {
    await loginPage.loginAs(users.lockedOut);

    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});