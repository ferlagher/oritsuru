import { Badge, CartIcon } from "./base";

export const CartWidget = () => {
    return(
        <Badge num={9} color='tuna'>
            <CartIcon/>
        </Badge>
    );
};