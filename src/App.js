import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ItemDetail } from './components';
import { NavBar, ItemListContainer } from './layout';

function App() {

    return (
        <Router>
            <GlobalStyle/>
            <NavBar/>
            <main>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer/>}/>
                    <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                    <Route exact path='/item/:id' element={<ItemDetail/>}/>
                    <Route path='*' element={<div/>}/>
                </Routes>
            </main>
        </Router>
    );
};

export default App;