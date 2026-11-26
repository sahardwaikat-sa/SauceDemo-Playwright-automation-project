import { Header } from '../components/Header.js';
import { BasePage } from './BasePage.js';

export class InventoryPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page, '/inventory.html');
    this.header = new Header(page);
    this.title = page.getByTestId('title');
    this.items = page.getByTestId('inventory-item');
  }
}