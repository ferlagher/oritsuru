import styled from 'styled-components';
import { FlexContainer } from './base';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';

const NavLink = styled.a`
    color: ${({theme}) => theme.base.nori};
    fill: ${({theme}) => theme.base.nori};
    border-radius: 0.25em;
    padding: 0.25em;
    text-decoration: none;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover {
        color: ${({theme}) => theme.base.salmon};
        fill: ${({theme}) => theme.base.salmon};
    }
`

export const NavBar = () => {
    return (
        <FlexContainer as='header' justify='space-between' gap='1em' padding='1rem'>
            <NavLink href="/">
                <Logo dark hideOnMobile/>
            </NavLink>
            <FlexContainer justify='flex-end' gap='1em'>
                <FlexContainer as='nav' justify='space-between' align='center' gap='0.75em'>
                    <NavLink href='#'>Menú</NavLink>
                    <NavLink href='#'>Sobre</NavLink>
                    <NavLink href='#'>Contacto</NavLink>
                </FlexContainer>
                <CartWidget/>
            </FlexContainer>
        </FlexContainer>
    );
};