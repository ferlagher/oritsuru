import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ThemeSwitch, useThemeSwitch } from './components';
import { NavBar } from './layout';
import { Home, Menu } from './pages';


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
                <Route exact path='/itemlist' element={<Menu/>}/>
            </Routes>
        </Router>
    );
};

export default App;