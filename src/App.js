import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle, ThemeSwitch, useThemeSwitch } from './components/GlobalStyle';
import { NavBar } from './components/organisms';
import { Home, Menu } from './pages';


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
                    <Route index element={<Home/>}/>
                    <Route exact path='/itemlist' element={<Menu/>}/>
                </Routes>
            </main>
        </Router>
    );
};

export default App;