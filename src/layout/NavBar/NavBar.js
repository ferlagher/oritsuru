import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, Logo, IconButton, UserIcon, CartWidget } from '../../components';
import { useNavBar } from './useNavBar';

const Header = styled(FlexContainer).attrs(({isSmall: isSmall}) =>({
    as: 'header',

/*     style: {
        transform: `translateY(${isSmall ? '-100%' : '0%'})`,
    } */
}))`
    position: sticky;
    width: 100%;
    margin-top: calc((-0.10510423526 * 100vw / 2));
    padding: calc((0.10510423526 * 100vw / 2) + var(--space-sm)) var(--space-sm);
    transition: background-color, transform;
    transition-duration: 0.2s, 0.5s;
    transition-timing-function: ease-in-out;
    
/*     &:before {
    content: '';
    position: absolute;
    background-color: var(--color-secondary);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: skewY(-6deg);
    z-index: 98;
    box-shadow: 
        0 0.6rem 0 var(--color-primary-dark);
    } */
`;

const HeaderContent = styled(FlexContainer)`
    width: 100%;
    z-index: 99;
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
    padding: 0.25em;
    line-height: 1em;
    font-weight: 400;

    &.active {
    }
`;

export const NavBar = () => {
    const isSmall = useNavBar();
    
    return(
        <Header isSmall={isSmall}>
            <HeaderContent>
                <Link to='/'>
                    <Logo hideOnMobile/>
                </Link>

                <Nav>
                    <StyledNavLink activeclassname='active' to='/category/:categoryId'>categoryId</StyledNavLink>
                </Nav>

                <IconButton href='#'><CartWidget/></IconButton>
            </HeaderContent>
        </Header>
    );
};