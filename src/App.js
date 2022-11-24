import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { EmptyState, Button, Loader } from './components';
import { NavBar } from './layout';
import { ItemListContainer, ItemDetail, Cart, Login } from './views';
import { CartProvider, ItemsProvider } from './context';

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <CartProvider>
                <ItemsProvider>
                    <NavBar/>
                    <main>
                        <section>
                            <Routes>
                                <Route exact path='/' element={<ItemListContainer/>}/>
                                <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                                <Route exact path='/item/:id' element={<ItemDetail/>}/>
                                <Route exact path='/cart' element={<Cart/>}/>
                                <Route exact path='/login' element={<Login/>}/>
                                <Route exact path='/load' element={<Loader/>}/>
                                <Route path='*' element={<EmptyState><Button to='/'>Volver al inicio</Button></EmptyState>}/>
                            </Routes>
                        </section>
                        <aside>
                            <Cart $small/>
                        </aside>
                    </main>
                </ItemsProvider>
            </CartProvider>
        </Router>
    );
};

export default App;