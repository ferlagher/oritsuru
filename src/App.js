import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Footer, NavBar } from './layout';
import { ItemListContainer, ItemDetail, Cart, Login, NotFound } from './views';
import { CartProvider, ItemsProvider } from './context';

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <CartProvider>
                <ItemsProvider>
                    <NavBar/>
                    <main>
                        <Routes>
                            <Route exact path='/' element={<ItemListContainer/>}/>
                            <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                            <Route exact path='/item/:id' element={<ItemDetail/>}/>
                            <Route exact path='/cart' element={<Cart/>}/>
                            <Route exact path='/login' element={<Login/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </main>
                </ItemsProvider>
                <Footer/>
            </CartProvider>
        </Router>
    );
};

export default App;