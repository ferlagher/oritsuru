import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, Logo, UserIcon } from '../../components';
import { textOutline } from '../../utils';
import { CartWidget } from './CartWidget';

const Header = styled(FlexContainer).attrs({
    as: 'header',
})`
    flex-direction: column;
    position: relative;
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: calc(var(--space-factor) * 100vw);
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: calc(var(--space-factor) * 100vw);
        width: calc(100% + var(--space-lg) * 2);
        height: calc(100% + var(--space-factor) * 100vw);
        transform: skewY(var(--skew-deg)) translate(-50%);
        background-color: var(--color-secondary);
        background-image: 
            repeating-conic-gradient(var(--color-secondary) 0 9deg, transparent 9deg 18deg),
            radial-gradient(var(--color-secondary-dark) 28%, transparent 28%),
            radial-gradient(var(--color-secondary-dark) 28%, transparent 28%);
        background-position: 50% 0%, 0px 0px, 3px 3px;
        background-size: 100% 200%, 6px 6px, 6px 6px;
        border-bottom: 0.15rem dotted var(--color-secondary-dark);
    }
    `;

const HeaderContent = styled(FlexContainer)`
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    padding: var(--space-sm) 0;
    z-index: 11;

    a:focus-visible {
        outline: none;
    }
    
    h1 {
        font-size: 0.7em;
        background-color: var(--color-background);
        padding: 0.1em;
        border-radius: 2px;
        transform: skewY(var(--skew-deg));
        margin-bottom: 0.4em;
    }

    & > *:last-child { // margin between HeaderContent and Nav
        margin-bottom: calc(var(--space-factor) * min(100vw, var(--max-width)) * 2);
    }
    `;

const IconsContainer = styled(FlexContainer)`
    gap: var(--space-sm);

    svg {
        fill: var(--color-background);
        stroke: var(--color-secondary-dark);
        stroke-width: 1em;
        transition-property: fill stroke;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }

    a:hover, a:focus-visible {
        svg{
            fill: var(--color-background-light);
            stroke: var(--color-primary);
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
    max-width: var(--max-width);
    gap: 0.2rem;
    transform: skewY(var(--skew-deg));
    margin-top: calc(var(--space-factor) * -100vw);
    transition: all 0.2s ease-in-out;
    z-index: 11;
    `;

const StyledNavLink = styled(NavLink)`
    font-size: 0.7em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-primary);
    ${textOutline('var(--color-background)')}
    background-color: var(--color-background);
    border: 0.2em solid var(--color-secondary);
    outline: 0.2em solid var(--color-background);
    padding: 0.35em 0.1em;
    border-radius: 1px;
    flex: 1;
    transition-property: border, padding;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
    
    &:hover, &:focus-visible {
        border-width: 0.3em;
        padding: 0.25em 0;
    }
    
    &.active {
        border-color: var(--color-primary);
    }
`;

export const NavBar = (categories, itemsInCart) => {
    //const navLinks = categories.map(ctgy => <StyledNavLink to={`/category/${ctgy.name}`} activeclassname='active' key={ctgy.id}>{ctgy.name}</StyledNavLink>)
    
    return(
        <Header>
            <HeaderContent>
                <FlexContainer direction='column' justify='space-between' align='flex-start'>
                    <Link to='/'><Logo/></Link>
                    <h1>Sushi delivery & take away</h1>
                </FlexContainer>
                <IconsContainer>
                    <Link to='/login'><UserIcon/></Link>
                    <CartWidget itemsInCart={itemsInCart}/>
                </IconsContainer>
            </HeaderContent>
            <Nav>
                {/* navLinks */}
            </Nav>
        </Header>
    );
};