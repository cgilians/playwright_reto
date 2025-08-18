import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginExitosoPage";
import ProductsPage from "../pages/agregarProductoCarritoPage";
import CartPage from "../pages/verProductoPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

Given('el usuario ha agregado un producto al carrito', async () => {
    await loginPage.navigateToOrangePage();
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.addFirstProductToCart();
});

When('navega al carrito de compras', async () => {
    await cartPage.goToCart();
    await global.page.waitForTimeout(3000);
});

Then('debería ver el producto agregado', async () => {
    await cartPage.verifyProductInCart();
});