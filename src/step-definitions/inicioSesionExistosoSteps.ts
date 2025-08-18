import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginExitosoPage";

const loginPage = new LoginPage();

Given('ingreso a la pagina de inicio de sesion de Sauce Demo', async () => {
    await loginPage.navigateToOrangePage();
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});

When('ingresa el usuario {string} y la contraseña {string}', async (user, password) => {
    await loginPage.login(user, password);
     await global.page.waitForTimeout(3000); // Espera 3 segundos
});

Then('carga la página de productos', async () => {
    await global.page.waitForSelector("//span[text()='Products']");
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});