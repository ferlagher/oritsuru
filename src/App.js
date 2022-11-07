import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ItemDetail, ThemeSwitch, useThemeSwitch } from './components';
import { ItemListContainer, NavBar } from './layout';
import { Placeholder } from './pages'

function App() {
    const [theme, check, toggleTheme] = useThemeSwitch()

    return (
        <Router>
            <GlobalStyle theme={theme}/>
            <NavBar toggle={
                <ThemeSwitch handler={toggleTheme} check={check}/>
            }/>
            <main>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer/>}/>
                    <Route exact path='/category/:id' element={<ItemListContainer/>}/>
                    <Route exact path='/item/:id' element={<ItemDetail/>}/>
                    <Route path='*' element={<Placeholder/>}/>
                </Routes>
            </main>
        </Router>
    );
};

export default App;