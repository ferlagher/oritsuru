import { Link } from 'react-router-dom';
import { CartIcon, Badge } from "../../components";

export const CartWidget = (itemsInCart) => {
    return(
        <Link to='/cart'>
            <Badge num={itemsInCart} color='tuna'>
                <CartIcon/>
            </Badge>
        </Link>
    );
};