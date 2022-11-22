# Oritsuru Sushi 🍣

[![](https://img.shields.io/badge/README-English-blue)](./README.md)

Simulador de e-commerce hecho con React.js y Firestore.

## Deploy

[oritsuru.netlify.app](oritsuru.netlify.app) [![Netlify Status](https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status)](https://app.netlify.com/sites/oritsuru/deploys)


## Consignas
### Componentes

- [x] [Navar con cart](./src/layout/NavBar/)  
- [x] [Catálogo](./src/layout/ItemListContainer/)  
- [x] [Detalle de producto](./src/components/ItemDetail/)  
- [x] [Item Count](./src/components/ItemCount/)  

### Rutas

- [x] [BrowserRouter](./src/App.js)  

### Links

- [x] [‘/’](./src/layout/NavBar/NavBar.js)  
- [x] [‘/item/:id’](./src/components/Item/Item.js)  
- [x] [‘/category/:categoryId’](./src/layout/NavBar/NavBar.js)  

### Hooks

- [x] [useEffect & useParams (ItemListContainer)](./src/layout/ItemListContainer/useItemListContainer.js)  
- [x] [useEffect & useParams (ItemDetails)](./src/components/ItemDetail/useItemDetail.js)  

### Promise

- [x] [Promise con productos](./src/utils/getFakeItems.js)  