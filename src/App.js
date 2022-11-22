import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Cart, ItemDetail, EmptyState } from './components';
import { NavBar, ItemListContainer, Login } from './layout';
import { CartProvider, ItemsProvider } from './context';

const App = () => {
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
                                <Route exact path='/login' element={<Login/>}/>
                                <Route path='*' element={<EmptyState/>}/>
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