import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, Logo, CartWidget } from '../../components';
import { textOutline } from '../../utils/mixins';
import { useNavBar } from './useNavBar';

const Header = styled(FlexContainer).attrs({
    as: 'header',
})`
    flex-direction: column;
    position: relative;
    width: 100%;
    font-size: 1.5rem;
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
    
    h1 {
        font-size: 0.7em;
        background-color: var(--color-background);
        padding: 0.1em;
        border-radius: 2px;
        transform: skewY(var(--skew-deg));
        margin-bottom: 0.4em;
    }
    `;

const IconsContainer = styled(FlexContainer)`
    justify-content: space-between;
    padding-bottom: calc(var(--space-factor) * min(100vw, var(--max-width)) * 2);
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
    font-size: clamp(0.6rem, 2vw, 1rem);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-primary);
    ${textOutline('var(--color-background)')}
    background-color: var(--color-background);
    border: 0.13rem solid var(--color-secondary);
    outline: 0.15rem solid var(--color-background);
    padding: 0.5em;
    border-radius: 1px;
    flex: 1;
    
    &.active {
        border-color: var(--color-primary);
    }
`;

export const NavBar = () => {
    const isSmall = useNavBar();
    
    return(
        <Header className={isSmall ? 'small' : ''}>
            <HeaderContent>
                <FlexContainer direction='column' justify='space-between' align='flex-start'>
                    <Link to='/'><Logo/></Link>
                    <h1>Sushi Fresh & Fun!</h1>
                </FlexContainer>
                <IconsContainer>
                    <Link to='#'><CartWidget/></Link>
                </IconsContainer>
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