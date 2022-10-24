import { Hero } from './components/Hero';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting='Hola, caracola. 👋🏻🐚'/> {/* I dont get what's the point of this... */}
            <Hero/>
        </>
)};

export default App;
