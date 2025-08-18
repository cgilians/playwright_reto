import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginExitosoPage";
import ProductsPage from "../pages/agregarProductoCarritoPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given('el usuario inicia sesión con credenciales válidas', async () => {
    await loginPage.navigateToOrangePage();
    await loginPage.login("standard_user", "secret_sauce");
    await global.page.waitForSelector("//span[text()='Products']");
});

When('agrego un producto al carrito desde la pagina de productos', async () => {
    await productsPage.addFirstProductToCart();
    await global.page.waitForTimeout(2000);
});

Then('el icono del carrito debe mostrar 1 producto agregado', async () => {
    await productsPage.verifyCartCount(1);
});