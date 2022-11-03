import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, IconButton, UserIcon } from '../../atoms';
import { CartWidget } from '../../molecules/CartWidget';
import { Logo } from '../../molecules/Logo';
import { useNavBar } from './useNavBar';

const Header = styled(FlexContainer).attrs({
    as: 'header',
})`
    position: fixed;
    top: 0;
    width: 100%;
    padding: var(--space-sm);
    ${({isHidden}) => isHidden && 'transform: translateY(-100%);'}
    ${({isOpaque}) => {
        const opaqueStyles = `
            background-color: var(--color-bg);
            border-bottom: 2px solid var(--color-bg-light);
            box-shadow: var(--shadow-lg);
        `;

        const translucentStyles = `
            background-color: transparent;
        `;

        return isOpaque ? opaqueStyles : translucentStyles;
    }}
    z-index: 99;
    transition: background-color, transform;
    transition-duration: 0.2s, 0.5s;
    transition-timing-function: ease-in-out;
`;

const HeaderContent = styled(FlexContainer)`
    width: 100%;
    max-width: var(--max-width);
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-sm);
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

const StyledNavLink = styled(NavLink)`
    color: transparent;
    background: linear-gradient(90deg, #ed8840, #eb8141, #e87b42, #e67543, #e36f44, #e16a45, #de6547, #dc6048, #d95b49, #d6574a, #d4534c, #d14f4d);
    -webkit-background-clip: text;
    padding: 0.25em;
    position: relative;
    line-height: 1em;
    
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

    &.active {
        color: currentColor;
        opacity: 0.7;
    }
`;

export const NavBar = ({toggle}) => {
    const [isOpaque, isHidden] = useNavBar();
    
    return (
        <Header isOpaque={isOpaque} isHidden={isHidden}>
            <HeaderContent>
                <Link to='/'>
                    <Logo hideOnMobile/>
                </Link>

                <Nav>
                    <StyledNavLink activeClassName='active' to='/itemlist'>Menú</StyledNavLink>
                    <StyledNavLink activeClassName='active' to='/'>Sobre</StyledNavLink>
                    <StyledNavLink activeClassName='active' to='/'>Contacto</StyledNavLink>
                </Nav>

                <FlexContainer justify='space-between' align='center' gap='var(--space-sm)'>
                    {toggle}
                    <IconButton href='#'><CartWidget/></IconButton>
                    <IconButton href='#'><UserIcon/></IconButton>
                </FlexContainer>
            </HeaderContent>
        </Header>
    );
};