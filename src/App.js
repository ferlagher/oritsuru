import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { Hero, ItemListContainer, NavBar, Footer, ItemCount } from './components';
import { Badge, CartIcon, GithubIcon, HeartIcon, LinkedinIcon, Ribbon, UserIcon } from './components/base';
import { useState } from 'react';
import { themes } from './theme';

const TestDiv = styled.div`
    height: 5rem;
    width: 5rem;
    background-color: var(--color-nori);
`

function App() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <GlobalStyle theme={themes[theme]}/>
            <NavBar toggle={toggleTheme}/>
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
                <HeartIcon/>
                <GithubIcon/>
                <LinkedinIcon/>
                <CartIcon/>
                <UserIcon/>
            </ItemListContainer>
            </main>
            <Footer/>
        </>
    );
};

export default App;