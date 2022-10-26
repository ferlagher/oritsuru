import { Hero, ItemListContainer, NavBar } from './components';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <NavBar/>
            <main>
            <Hero/>
            <ItemListContainer greeting='Hola, caracola. 👋🏻🐚'/> {/* I dont get what's the point of this... */}
            </main>
            <Footer/>
        </>
)};

export default App;
