Feature: Flujo del proceso de compra en Sauce Demo


Scenario: Inicio de sesión con credenciales válidas
    Given ingreso a la pagina de inicio de sesion de Sauce Demo
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Then carga la página de productos

Scenario: Inicio de sesión con credenciales inválidas
    Given ingreso a pagina de inicio de sesion de Sauce Demo
    When ingresa usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error de bloqueo

Scenario: Agregar producto al carrito
    Given el usuario inicia sesión con credenciales válidas
    When agrego un producto al carrito desde la pagina de productos
    Then el icono del carrito debe mostrar 1 producto agregado

Scenario: Ver producto en el carrito de compras
    Given el usuario ha agregado un producto al carrito
    When navega al carrito de compras
    Then debería ver el producto agregado

Scenario: Completar el proceso de compra
    Given que el usuario tiene productos en el carrito
    When doy clic en botón checkout
    And ingreso datos para la compra
    And luego finalizo la compra
    Then muestra mensaje de confirmación de compra exitosa