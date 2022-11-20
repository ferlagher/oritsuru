import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { CartIcon, Badge } from "../";
import { CartContext } from '../../context';

const WidgetLink = styled(Link)`
    svg {
        fill: var(--color-background);
        stroke: var(--color-secondary-dark);
        stroke-width: 1em;
        transition-property: fill stroke;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }

    &:hover, &:focus-visible {
        outline: none;
        
        svg{
            fill: var(--color-background-light);
            stroke: var(--color-primary);
        }
    }
`;

export const CartWidget = () => {
    const itemsInCart = useContext(CartContext).cartList.length;
    return(
        <WidgetLink to='/cart'>
            <Badge num={itemsInCart} color='tuna'>
                <CartIcon/>
            </Badge>
        </WidgetLink>
    );
};