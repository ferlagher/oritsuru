import { Badge, CartIcon } from "../atoms";

export const CartWidget = () => {
    return(
        <Badge num={9} color='tuna'>
            <CartIcon/>
        </Badge>
    );
};