import styled from 'styled-components';
import { FlexContainer, Switch, UserIcon } from './base';
import { CartWidget } from './CartWidget';
import { Logo } from './Logo';

const NavLink = styled.a`
    border-radius: 0.25em;
    padding: 0.25em;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        background-color: var(--color-salmon-light);
        height: 2.5em;
        width: 2.5em;
        border-radius: 50%;
        opacity: 0;
        scale: 0;
        transition: 0.2s ease-in-out;
    }

    &:hover::before {
        opacity: 0.2;
        scale: 1;
    }
`;

export const NavBar = ({toggle}) => {
    return (
        <FlexContainer as='header' justify='space-between' gap='1em' padding='1rem'>
            <a href="/">
                <Logo hideOnMobile/>
            </a>

            <FlexContainer as='nav' justify='space-between' align='center' gap='1rem'>
                <NavLink href='#'>Menú</NavLink>
                <NavLink href='#'>Sobre</NavLink>
                <NavLink href='#'>Contacto</NavLink>
            </FlexContainer>

            <FlexContainer justify='space-between' align='center' gap='1rem'>
                <Switch handler={toggle}/>
                <NavLink href='#'><UserIcon/></NavLink>
                <NavLink href='#'><CartWidget/></NavLink>
            </FlexContainer>
        </FlexContainer>
    );
};