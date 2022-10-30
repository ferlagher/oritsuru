import { GlobalStyle, ThemeSwitch, useThemeSwitch } from './components/GlobalStyle';
import { Hero, ItemListContainer, NavBar, Footer } from './components/organisms';

function App() {
    const [theme, check, toggleTheme] = useThemeSwitch()

    return (
        <>
            <GlobalStyle theme={theme}/>
            <NavBar toggle={
                <ThemeSwitch handler={toggleTheme} check={check}/>
            }/>
            <main>
                <Hero/>
                <ItemListContainer greeting='Probando, probando, 1, 2, 3... 🎤'/>
            </main>
            <Footer/>
        </>
    );
};

export default App;