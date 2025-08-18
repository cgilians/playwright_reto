import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginFallidoPage";

const loginPage = new LoginPage();

Given('ingreso a pagina de inicio de sesion de Sauce Demo', async () => {
    await loginPage.navigateToOrangePage();
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});

When('ingresa usuario {string} y contraseña {string}', async (user, password) => {
    await loginPage.login(user, password);
     await global.page.waitForTimeout(3000); // Espera 3 segundos
});

Then('debería ver un mensaje de error de bloqueo', async () => {
    await global.page.waitForSelector("//h3[@data-test='error']");
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});