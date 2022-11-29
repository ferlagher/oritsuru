# Oritsuru Sushi 🍣

[![](https://img.shields.io/badge/README-English-blue)](./README.md)

Simulador de e-commerce hecho con React.js y Firestore.

## Deploy

[oritsuru.netlify.app](https://oritsuru.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status)](https://app.netlify.com/sites/oritsuru/deploys)

## Descripción

Los usuarios pueden ingresar o registrarse si quieren, usando un email y contraseña.
Desde el inicio, pueden navegar por el catálogo completo o firtrar productos por categoría, favoritos, o productos vegetarianos. Se puede usar más de un filtro para obterer resultados más específicos.
Desde el detalle del producto, pueden añadirlo al carrito, y luego ir al detalle de la compra para finalizar el pedido y crear una orden.
Si el usuario inició sesión, puede ver en el perfil sus datos y las órdenes previas.

## Librerías

- [Create React App][cra] - Creación del proyecto
- [React Router][router] - Routing y navegación
- [React Hook Form][form] - Validación de formularios
- [Styled Components][styled] - CSS-in-JS

## Scripts

- `npm start`
    Inica el proyecto en entorno de desarrollo.
- `npm build`
    Crea los archivos para producción.
- `npm test`
    Inica el proyecto para ejecutar tests.

## Prerequisitos

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org)

## Otras herramientas usadas

- Adobe Photoshop & Illustrator - Logo, loader, ilustraciones e imágenes de productos
- [RegExr][regexr] - Herramienta para aprender expresiones regulares
- [Optimizilla][opti] - Compresor de imágenes online

## Estructura de las carpetas

- `src`: Contiene todo el código fuente.
    - `components`: Componentes generales que se usan en toda la app.
    - `views`: Componentes específicos de cada vista.
    - `layout`: Contiene el header y el footer.
    - `context`: Context providers.
    - `GlobalStyle`: Componente con los estilos gereales, variables CSS y temas.
    - `utils`: Lógica compartida en toda la app. 
    - `assets`: Contiene imágenes y tipogafías. (Las imágenes de los productos están almacenadas en Firebase Storage)
- `App.js`: Componente principal.

## Inspiración

- https://www.instagram.com/paiheme/
- https://hype4.academy/articles/design/neubrutalism-is-taking-over-web

🐉

[es]: https://img.shields.io/badge/README-Español-red
[deploy]: https://oritsuru.netlify.app
[status]: https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status
[netlify]: https://app.netlify.com/sites/oritsuru/deploys
[cra]: https://github.com/facebook/create-react-app
[router]: https://github.com/remix-run/react-router
[form]: https://github.com/react-hook-form/react-hook-form
[styled]: https://github.com/styled-components/styled-components
[regexr]: https://regexr.com
[opti]: https://imagecompressor.com