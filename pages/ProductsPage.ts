import { Page } from "@playwright/test";

export class ProductsPage {
    constructor(private page: Page) {}

    async addFirstItemToCart() {
        await this.page.click('.inventory_item button >> nth=0');
    }

    async getCartCount() {
        return this.page.locator('.shopping_cart_badge').textContent();
    }
}