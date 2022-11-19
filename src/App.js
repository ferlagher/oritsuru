import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Cart, ItemDetail } from './components';
import { NavBar, ItemListContainer } from './layout';
import { CartProvider, ItemsProvider } from './context';

function App() {

    return (
        <Router>
            <GlobalStyle/>
            <NavBar/>
            <main>
            <CartProvider>
                <ItemsProvider>
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer/>}/>
                        <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                        <Route exact path='/item/:id' element={<ItemDetail/>}/>
                        <Route exact path='/cart' element={<Cart/>}/>
                        <Route path='*' element={'🚧4️⃣0️⃣4️⃣🚧'}/>
                    </Routes>
                </ItemsProvider>
            </CartProvider>
            </main>
        </Router>
    );
};

export default App;