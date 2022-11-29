import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Footer, Header } from './layout';
import { ItemListContainer, ItemDetail, Cart, User, NotFound, Checkout, OrderDetail } from './views';
import { CartProvider, ItemsProvider, UserProvider } from './context';

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <UserProvider>
                <CartProvider>
                    <ItemsProvider>
                        <Header/>
                        <main>
                            <Routes>
                                <Route exact path='/' element={<ItemListContainer/>}/>
                                <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                                <Route exact path='/item/:id' element={<ItemDetail/>}/>
                                <Route exact path='/cart' element={<Cart/>}/>
                                <Route exact path='/checkout' element={<Checkout/>}/>
                                <Route exact path='/order/:id' element={<OrderDetail/>}/>
                                <Route exact path='/user' element={<User/>}/>
                                <Route path='*' element={<NotFound/>}/>
                            </Routes>
                        </main>
                    </ItemsProvider>
                    <Footer/>
                </CartProvider>
            </UserProvider>
        </Router>
    );
};

export default App;