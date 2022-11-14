import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Item, ItemDetail } from './components';
import { NavBar } from './layout';

function App() {

    return (
        <Router>
            <GlobalStyle/>
            <NavBar/>
            <Routes>
                <Route index element={<main><Item/></main>}/>
                <Route exact path='/item/:id' element={<main><ItemDetail/></main>}/>
            </Routes>
        </Router>
    );
};

export default App;