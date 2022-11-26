import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, UserIcon } from '../../components';
import { CartContext, ItemsContext } from '../../context';
import { Logo } from './Logo';
import { CartWidget } from './CartWidget';
import { NavBar } from './NavBar';

const Container = styled(FlexContainer).attrs({
    as: 'header',
})`
    flex-direction: column;
    position: relative;
    width: 100%;
    font-size: 1.1rem;
    padding: 0 var(--space-lg);
    margin-bottom: calc(var(--skew-margin-factor) * 100vw);

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: calc(var(--skew-margin-factor) * 100vw);
        width: 100%;
        height: calc(100% + var(--skew-margin-factor) * 100vw);
        transform: skewY(var(--skew-deg)) translate(-50%);
        background-color: var(--color-secondary);
        background-image: 
            repeating-conic-gradient(var(--color-secondary) 0 9deg, transparent 9deg 18deg),
            radial-gradient(var(--color-secondary-dark) 28%, transparent 28%),
            radial-gradient(var(--color-secondary-dark) 28%, transparent 28%);
        background-position: 50% 0%, 0px 0px, 3px 3px;
        background-size: 100% 200%, 6px 6px, 6px 6px;
        border-bottom: var(--border) var(--color-secondary-dark);
    }
    `;

const Wrapper = styled(FlexContainer)`
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
        border-radius: var(--border-radius);
        transform: skewY(var(--skew-deg));
        margin-bottom: 0.4em;
    }

    & > *:last-child { // margin between Wrapper and Nav
        margin-bottom: calc(var(--skew-margin-factor) * min(100vw, var(--max-width)) * 2);
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

export const Header = () => {
    const { categories } = useContext(ItemsContext);
    const itemsInCart = useContext(CartContext).cartList.length;

    return(
        <Container>
            <Wrapper>
                <FlexContainer $direction='column' $justify='space-between' $align='flex-start'>
                    <Link to='/'><Logo/></Link>
                    <h1>Sushi delivery & take away</h1>
                </FlexContainer>
                <IconsContainer>
                    <Link to='/login'><UserIcon/></Link>
                    <CartWidget itemsInCart={itemsInCart}/>
                </IconsContainer>
            </Wrapper>
            <NavBar categories={categories}/>
        </Container>
    );
};