import styled from 'styled-components';
import { Hero, ItemListContainer, NavBar, Footer, ItemCount } from './components';
import { Badge, Ribbon } from './components/base';

const TestDiv = styled.div`
    height: 5rem;
    width: 5rem;
    background-color: ${({theme}) => theme.light.nori};
`

function App() {
    return (
        <>
            <NavBar/>
            <main>
            <Hero/>
            <ItemListContainer greeting='Probando, probando, 1, 2, 3... 🎤'>
                <ItemCount stock={15} color='salmon'/>
                <ItemCount stock={0} color='tuna'/>
                <ItemCount stock={5} color='avocado'/>
                <Ribbon color='salmon' text='textolaaaaaaaaargo'><TestDiv/></Ribbon>
                <Ribbon color='tuna' text='🍣'><TestDiv/></Ribbon>
                <Ribbon color='avocado' text='Veggie'><TestDiv/></Ribbon>
                <Ribbon color='nori' text='Salto de línea'><TestDiv/></Ribbon>
                <Badge color='salmon' num={8}><TestDiv/></Badge>
                <Badge color='tuna' num={999}><TestDiv/></Badge>
                <Badge color='avocado' num={1}><TestDiv/></Badge>
            </ItemListContainer>
            </main>
            <Footer/>
        </>
)};

export default App;