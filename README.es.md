# Oritsuru Sushi 馃崳

[![](https://img.shields.io/badge/README-English-blue)](./README.md)

Simulador de e-commerce hecho con React.js y Firestore.

## Deploy

[oritsuru.netlify.app](https://oritsuru.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status)](https://app.netlify.com/sites/oritsuru/deploys)

## Descripci贸n

Los usuarios pueden ingresar o registrarse si quieren, usando un email y contrase帽a.
Desde el inicio, pueden navegar por el cat谩logo completo o firtrar productos por categor铆a, favoritos, o productos vegetarianos. Se puede usar m谩s de un filtro para obterer resultados m谩s espec铆ficos.
Desde el detalle del producto, pueden a帽adirlo al carrito, y luego ir al detalle de la compra para finalizar el pedido y crear una orden.
Si el usuario inici贸 sesi贸n, puede ver en el perfil sus datos y las 贸rdenes previas.

## Librer铆as

- [Create React App][cra] - Creaci贸n del proyecto
- [React Router][router] - Routing y navegaci贸n
- [React Hook Form][form] - Validaci贸n de formularios
- [Styled Components][styled] - CSS-in-JS

## Scripts

- `npm start`
    Inica el proyecto en entorno de desarrollo.
- `npm build`
    Crea los archivos para producci贸n.
- `npm test`
    Inica el proyecto para ejecutar tests.

## Prerequisitos

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org)

## Otras herramientas usadas

- Adobe Photoshop & Illustrator - Logo, loader, ilustraciones e im谩genes de productos
- [RegExr][regexr] - Herramienta para aprender expresiones regulares
- [Optimizilla][opti] - Compresor de im谩genes online

## Estructura de las carpetas

- `src`: Contiene todo el c贸digo fuente.
    - `components`: Componentes generales que se usan en toda la app.
    - `views`: Componentes espec铆ficos de cada vista.
    - `layout`: Contiene el header y el footer.
    - `context`: Context providers.
    - `GlobalStyle`: Componente con los estilos gereales, variables CSS y temas.
    - `utils`: L贸gica compartida en toda la app. 
    - `assets`: Contiene im谩genes y tipogaf铆as. (Las im谩genes de los productos est谩n almacenadas en Firebase Storage)
- `App.js`: Componente principal.

## Inspiraci贸n

- https://www.instagram.com/paiheme/
- https://hype4.academy/articles/design/neubrutalism-is-taking-over-web

馃悏

[es]: https://img.shields.io/badge/README-Espa帽ol-red
[deploy]: https://oritsuru.netlify.app
[status]: https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status
[netlify]: https://app.netlify.com/sites/oritsuru/deploys
[cra]: https://github.com/facebook/create-react-app
[router]: https://github.com/remix-run/react-router
[form]: https://github.com/react-hook-form/react-hook-form
[styled]: https://github.com/styled-components/styled-components
[regexr]: https://regexr.com
[opti]: https://imagecompressor.com