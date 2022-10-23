import { Nav } from './Nav'
import logo from '../../assets/logo.svg'
import { Anchor } from '../Anchor';

export const NavBar = () => {
    return (
        <header>
            <Anchor href="/">
                <svg><use xlinkHref={logo}></use></svg>
                ORIGAMI
            </Anchor>
            <Nav/>
            <Anchor href="#">Iniciar sesión</Anchor>
        </header>
    );
};