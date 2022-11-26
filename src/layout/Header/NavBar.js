import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer } from '../../components';
import { textOutline } from '../../utils';

const Nav = styled(FlexContainer).attrs({
    as: 'nav',
})`
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    gap: 0.2rem;
    transform: skewY(var(--skew-deg));
    margin-top: calc(var(--skew-margin-factor) * -100vw);
    transition: all 0.2s ease-in-out;
    z-index: 11;
    `;

const NavButton = styled(NavLink)`
    font-size: 0.7em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-primary);
    ${textOutline('var(--color-background)')}
    background-color: var(--color-background);
    border: var(--border) var(--color-secondary);
    outline: var(--border) var(--color-background);
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

export const NavBar = ({categories}) => {
    return(
        <Nav>
            {categories.map(ctgy => (
                <NavButton to={`/category/${ctgy.name}`} activeclassname='active' key={ctgy.id}>{ctgy.name}</NavButton>
            ))}
        </Nav>
    );
};