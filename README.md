# Oritsuru Sushi 🍣

[![](https://img.shields.io/badge/README-Español-red)](./README.es.md)

E-commerce simulator builded with React.js and Firestore.

## Deploy

[oritsuru.netlify.app](https://oritsuru.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status)](https://app.netlify.com/sites/oritsuru/deploys)

## Description

Users can login/register if they want using an email and password.
From the index, they can browse the entire catalogue of products or filter elements based on categories, favorites or vegetarian products. It's possible to apply more than one filter and get more specific results.
From the item detail, they can add products to the cart, and then go to the checkout view and submit the order with they data.
Finally, if the user is logged, there is a profile view to check the user data and visualize previous orders.

## Libraries

- [Create React App][cra] - Project setup
- [React Router][router] - Routing and navigation
- [React Hook Form][form] - Form validation
- [Styled Components][styled] - CSS-in-JS

## Scripts

- `npm start`
    Start the project in the development enviroment.
- `npm build`
    Build the project for production.
- `npm test`
    Start the project and run tests.

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org)

## Other tools used

- Adobe Photoshop & Illustrator - Logo, ilustrations and product images
- [RegExr][regexr] - Regular expresions tool
- [Optimizilla][opti] - Online image compressor

## Folder Structure

- `src`: Contains all the source code.
    - `components`: General components used across the app.
    - `views`: Specific components organized by view.
    - `layout`: Contains the header and footer.
    - `context`: React context providers.
    - `GlobalStyle`: Provides the global styles, css variables and theme colors.
    - `utils`: Helper functions and logic. 
    - `assets`: Contains images and custom fonts. (Product images are stored in Firebase Storage)
- `App.js`: Main component.

## Inspiration

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