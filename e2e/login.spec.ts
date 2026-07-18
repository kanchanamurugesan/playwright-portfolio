import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/users';

test('login with valid credentials', async ({ page })=> {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user' , 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});
test('locked user sees error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);
    await expect(page.locator('[data-test="error"]')).toBeVisible();

});