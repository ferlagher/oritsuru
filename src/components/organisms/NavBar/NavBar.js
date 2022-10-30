import styled from 'styled-components';
import { FlexContainer, UserIcon } from '../../atoms';
import { CartWidget } from '../../molecules/CartWidget';
import { Logo } from '../../molecules/Logo';
import { useNavBar } from './useNavBar';

const Header = styled(FlexContainer).attrs({
    as: 'header',
})`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1200px;
    ${({isHidden}) => isHidden && 'transform: translateY(-100%);'}
    ${({isOpaque}) => {
        const opaqueStyles = `background-color: var(--color-bg);
                              border-bottom: 2px solid var(--color-bg-light);
                              box-shadow: -0.2em 0.2em 0.5em #00000030;`

        const translucentStyles = `color: var(--color-rice);
                                   background-color: transparent;`

        return isOpaque ? opaqueStyles : translucentStyles;
    }}
    z-index: 99;
    transition: background-color, transform;
    transition-duration: 0.2s, 0.5s;
    transition-timing-function: ease-in-out;
`;

const Nav = styled(FlexContainer).attrs({
    as: 'nav',
})`
    justify-content: space-between;
    align-items: center;
    gap: var(--space-sm);
    
    @media (max-width: 425px) {
        order: 2;
        width: 100%;
    }
`;

const NavLink = styled.a`
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
    const [isOpaque, isHidden] = useNavBar();
    
    return (
        <Header isOpaque={isOpaque} isHidden={isHidden}>
            <FlexContainer justify='space-between' wrap='wrap' gap='var(--space-sm)' padding='var(--space-sm)' flex='auto'>
                <a href="/">
                    <Logo hideOnMobile/>
                </a>

                <Nav>
                    <NavLink href='#'>Menú</NavLink>
                    <NavLink href='#'>Sobre</NavLink>
                    <NavLink href='#'>Contacto</NavLink>
                </Nav>

                <FlexContainer justify='space-between' align='center' gap='var(--space-sm)'>
                    {toggle}
                    <NavLink href='#'><CartWidget/></NavLink>
                    <NavLink href='#'><UserIcon/></NavLink>
                </FlexContainer>
            </FlexContainer>
        </Header>
    );
};