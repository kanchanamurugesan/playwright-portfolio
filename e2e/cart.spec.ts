import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '..//data/users';
import { test, expect } from '../fixtures';

test ('add item to cart' ,  async ({loggedInPage}) => {
   await loggedInPage.addFirstItemToCart();
   expect(await loggedInPage.getCartCount()).toBe('1');

});