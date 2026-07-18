import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../data/users';

type Fixtures = {
    loggedInPage: ProductsPage;
};

export const test = base.extend<Fixtures>({
    loggedInPage: async ({ page }, use) => {
        const loginPage =  new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await use(new ProductsPage(page));
    },

});

export { expect } from '@playwright/test';