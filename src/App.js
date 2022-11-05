import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ThemeSwitch, useThemeSwitch } from './components';
import { NavBar } from './layout';
import { Home, Menu, Placeholder } from './pages';

function App() {
    const [theme, check, toggleTheme] = useThemeSwitch()

    return (
        <Router>
            <GlobalStyle theme={theme}/>
            <NavBar toggle={
                <ThemeSwitch handler={toggleTheme} check={check}/>
            }/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route exact path='/menu' element={<Menu/>}/>
                <Route exact path='/about' element={<Placeholder/>}/>
                <Route exact path='/contact' element={<Placeholder/>}/>
            </Routes>
        </Router>
    );
};

export default App;