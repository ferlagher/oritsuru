import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, Logo, IconButton, CartWidget, LeafIcon, HeartIcon } from '../../components';
import { useNavBar } from './useNavBar';

const Header = styled(FlexContainer).attrs(({isSmall: isSmall}) =>({
    as: 'header',
}))`
    flex-direction: column;
    position: sticky;
    top: 0;
    width: 100%;
    margin-bottom: calc(var(--space-factor) * 100vw);
    z-index: 10;
    `;

const HeaderContent = styled(FlexContainer)`
    justify-content: space-between;
    width: 100%;
    padding: var(--space-sm);
    padding-bottom: calc(var(--space-factor) * 100vw * 2);
    background-color: var(--color-secondary);
    z-index: 12;

    svg {
        width: 4rem;
        height: 4rem;
        fill: var(--color-background);
        stroke: var(--color-primary);
        stroke-width: 0.5rem;
        filter: drop-shadow(-0.15rem 0.15rem 0 var(--color-primary));
        position: relative;

        &:after {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            content: '';
            background-image: 
                radial-gradient(var(--color-primary-transparent) 28%, transparent 28%),
                radial-gradient(var(--color-primary-transparent) 28%, transparent 28%);
            background-position: 0px 0px, 3px 3px;
            background-size: 6px 6px, 6px 6px;
        }
    }
    `;

const Nav = styled(FlexContainer).attrs({
    as: 'nav',
})`
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    gap: 0.2em;
    transform: var(--skew);
    margin-top: calc(var(--space-factor) * -100vw);
    z-index: 13;
    
    &:before {
        content: '';
        width: 100%;
        height: calc(var(--space-factor) * 100vw * 2);
        background-color: var(--color-background);
        background-image: 
            repeating-linear-gradient(45deg, var(--color-primary), var(--color-primary) 8vw, transparent 8vw, transparent 16vw),
            radial-gradient(var(--color-primary-transparent) 28%, transparent 28%),
            radial-gradient(var(--color-primary-transparent) 28%, transparent 28%);
        background-position: 0px 0px, 0px 0px, 3px 3px;
        background-size: cover, 6px 6px, 6px 6px;
        border: 0.13rem solid var(--color-primary);
        outline: 0.15rem solid var(--color-background);
    }
    `;

const StyledNavLink = styled(NavLink)`
    font-size: clamp(0.6rem, 2vw, 1rem);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-secondary);
    background-color: var(--color-background);
    border: 0.13rem solid var(--color-primary);
    outline: 0.15rem solid var(--color-background);
    padding: 0.5em;
    flex: 1;

    &.active {
    }
`;

export const NavBar = () => {
    const isSmall = useNavBar();
    
    return(
        <Header isSmall={isSmall}>
            <HeaderContent>
                <Link to='/'><Logo/></Link>
                <FlexContainer justify='space-between'>
                    <Link to='#'><HeartIcon/></Link>
                    <Link to='#'><LeafIcon/></Link>
                    <Link to='#'><CartWidget/></Link>
                </FlexContainer>
            </HeaderContent>

            <Nav>
                <StyledNavLink activeclassname='active' to='/category/gunkan'>gunkan</StyledNavLink>
                <StyledNavLink activeclassname='active' to='/category/sashimi'>sashimi</StyledNavLink>
                <StyledNavLink activeclassname='active' to='/category/temaki'>temaki</StyledNavLink>
                <StyledNavLink activeclassname='active' to='/category/nigiri'>nigiri</StyledNavLink>
                <StyledNavLink activeclassname='active' to='/category/roll'>roll</StyledNavLink>
            </Nav>
        </Header>
    );
};