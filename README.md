# Oritsuru Sushi 🍣

[![](https://img.shields.io/badge/README-Español-red)](./README.es.md)

E-commerce simulator builded with React.js and Firestore.

## Deploy

[oritsuru.netlify.app](oritsuru.netlify.app) [![Netlify Status](https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status)](https://app.netlify.com/sites/oritsuru/deploys)


## Consignas
### Componentes

- [x] NavBar
- [x] CartWidget
- [x] ItemListContainer
- [x] ItemList
- [x] ItemDetailContainer
- [x] ItemDetail
    - [x] ItemQuantitySelector
    - [x] Description
    - [x] AddItemButton
- [ ] Checkout
    - [ ] Brief (detalle de compra)

### Rutas

- [x] [BrowserRouter](./src/App.js)  

### Links

- [x] [‘/’](./src/layout/NavBar/NavBar.js)  
- [x] [‘/item/:id’](./src/components/Item/Item.js)  
- [x] [‘/category/:categoryId’](./src/layout/NavBar/NavBar.js)  

### Hooks

- [x] [useEffect & useParams (ItemListContainer)](./src/layout/ItemListContainer/useItemListContainer.js)  
- [x] [useEffect & useParams (ItemDetails)](./src/components/ItemDetail/useItemDetail.js)  

[es]: https://img.shields.io/badge/README-Español-red
[deploy]: https://oritsuru.netlify.app
[status]: https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status
[netlify]: https://app.netlify.com/sites/oritsuru/deploys
[navbar]: ./src/layout/NavBar/
[catalogue]: ./src/layout/ItemListContainer/
[item]: ./src/components/ItemDetail/
[counter]: ./src/components/ItemCount/
[router]: ./src/App.js
[index]: ./src/layout/NavBar/NavBar.js
[item]: ./src/components/Item/Item.js
[category]: ./src/layout/NavBar/NavBar.js