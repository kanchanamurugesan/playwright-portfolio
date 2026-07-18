import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('homepage loads' , async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle(/Swag Labs/);
});