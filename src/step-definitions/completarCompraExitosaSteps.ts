import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginExitosoPage";
import ProductsPage from "../pages/agregarProductoCarritoPage";
import CartPage from "../pages/verProductoPage";
import CheckoutPage from "../pages/completarCompraExitosaPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given('que el usuario tiene productos en el carrito', async () => {
    await loginPage.navigateToOrangePage();
    await loginPage.login("standard_user", "secret_sauce");
    await global.page.waitForTimeout(3000);
    await productsPage.addFirstProductToCart();
    await cartPage.goToCart();
});

When('doy clic en botón checkout', async () => {
    await global.page.waitForTimeout(3000);
    await checkoutPage.startCheckout();
});

When('ingreso datos para la compra', async () => {
    await global.page.waitForTimeout(2000);
    await checkoutPage.fillShippingInfo("Carlos", "Gilian", "13026");
    await global.page.waitForTimeout(2000);
});

When('luego finalizo la compra', async () => {
    await checkoutPage.finishCheckout();
});

Then('muestra mensaje de confirmación de compra exitosa', async () => {
    await global.page.waitForTimeout(3000);
    await checkoutPage.verifySuccessMessage();
});