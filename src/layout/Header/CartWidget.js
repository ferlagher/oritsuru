import { Link } from 'react-router-dom';
import { CartIcon, Notification } from "../../components";

export const CartWidget = ({itemsInCart}) => {
    return(
        <Link to='/cart'>
            <Notification num={itemsInCart}>
                <CartIcon/>
            </Notification>
        </Link>
    );
};