import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Cart, ItemDetail } from './components';
import { NavBar, ItemListContainer } from './layout';
import { CartProvider, ItemsProvider } from './context';

function App() {
    console.log(process.env)

    return (
        <Router>
            <GlobalStyle/>
                <ItemsProvider>
                    <CartProvider>
                        <NavBar/>
                        <main>
                            <Routes>
                                <Route exact path='/' element={<ItemListContainer/>}/>
                                <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                                <Route exact path='/item/:id' element={<ItemDetail/>}/>
                                <Route exact path='/cart' element={<Cart/>}/>
                                <Route path='*' element={'🚧4️⃣0️⃣4️⃣🚧'}/>
                            </Routes>
                            <aside>
                                <Cart $small/>
                            </aside>
                        </main>
                    </CartProvider>
                </ItemsProvider>
        </Router>
    );
};

export default App;