import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Cart, ItemDetail, EmptyState, Button } from './components';
import { NavBar, ItemListContainer, Login } from './layout';
import { CartProvider, ItemsProvider } from './context';

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <CartProvider>
                <NavBar/>
                <main>
                    <ItemsProvider>
                        <section>
                            <Routes>
                                <Route exact path='/' element={<ItemListContainer/>}/>
                                <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                                <Route exact path='/item/:id' element={<ItemDetail/>}/>
                                <Route exact path='/cart' element={<Cart/>}/>
                                <Route exact path='/login' element={<Login/>}/>
                                <Route path='*' element={<EmptyState><Button to='/'>Volver al inicio</Button></EmptyState>}/>
                            </Routes>
                        </section>
                    </ItemsProvider>
                    <aside>
                        <Cart $small/>
                    </aside>
                </main>
            </CartProvider>
        </Router>
    );
};

export default App;