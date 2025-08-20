# Playwright Reto QA
Proyecto de prueba de automatización con playwright

## Requisitos previos
- Node.js (recomendado >= 16)
- npm o yarn
- git
- Acceso a internet para descargar dependencias y navegadores

## Instalación (rápida)
#### Clonar el repositorio
```bash
git clone <repository-url> 
cd 
```
#### Instalar dependencias
```bash
npm ci
(o npm install si no usas lockfile)
```
#### Instalar Playwright Browsers
```bash
npm run install:browsers
```
#### Verificar la instalación
```bash
npm run type-check
```
## Variable de entorno
- BASEURL — URL base si quieres apuntar a otro entorno (por defecto: https://www.saucedemo.com/)


## Credenciales de prueba (usadas en los features)
- Usuario estándar:
    ```bash
    locked_out_user / secret_sauce
    ```
- Usuario bloqueado: 
    ```bash
    locked_out_user / secret_sauce
    ```

## Ejecución de pruebas
Comando para ejecutar el proyecto
```bash
npm run test-dev
```

## Estructura del proyecto
```
playwrightLab/
├── src/
│   ├── features/          # Cucumber feature files
│   ├── pages/             # Page Object Model class
│   ├── step-definitions/  # Cucumber step definitions
│   ├── hooks/             # Test hooks (setup/teardown)
│   └── helper/
│       ├── browsers/      # Browser management
│       ├── env/           # Environment setup
│       └── types/         # TypeScript definitions
├── test-results/
│   └── reports/           # HTML reports
├── config/               
│   └── cucumber.js        # Cucumber configuration
└── package.json
```

## Procesos automatizados
1. Iniciar sesión con credenciales válidas.
2. Iniciar sesión con credenciales inválidas.
3. Agregar producto al carrito desde la página de productos.
4. Ver producto agregado en el carrito de compras.
5. Realizar y finalizar el proceso de compra hasta la confirmación.