import { CartIcon, Badge } from "../";

export const CartWidget = () => {
    return(
        <Badge num={0} color='tuna'>
            <CartIcon/>
        </Badge>
    );
};