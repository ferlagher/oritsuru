import styled from 'styled-components';
import { Anchor } from './Anchor';
import { CartWidget } from './CartWidget';
import { FlexContainer } from './FlexContaier';
import { Logo } from './Logo';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75em;
`;

const Header = styled.header`
    padding: 1em;
`;

export const NavBar = () => {
    return (
        <Header>
            <FlexContainer justify='space-between' gap='1em'>
                <Anchor href="/">
                    <Logo dark hideOnMobile/>
                </Anchor>
                <FlexContainer justify='flex-end' gap='1em'>
                    <Nav>
                        <Anchor href='#'>Menú</Anchor>
                        <Anchor href='#'>Sobre</Anchor>
                        <Anchor href='#'>Contacto</Anchor>
                    </Nav>
                    <CartWidget/>
                </FlexContainer>
            </FlexContainer>
        </Header>
    );
};