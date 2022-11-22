import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon, Badge } from "../";
import { CartContext } from '../../context';

export const CartWidget = () => {
    const itemsInCart = useContext(CartContext).cartList.length;
    return(
        <Link to='/cart'>
            <Badge num={itemsInCart} color='tuna'>
                <CartIcon/>
            </Badge>
        </Link>
    );
};