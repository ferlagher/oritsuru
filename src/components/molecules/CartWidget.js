import { CartIcon } from "../atoms";
import { Badge } from "./Badge";

export const CartWidget = () => {
    return(
        <Badge num={9} color='tuna'>
            <CartIcon/>
        </Badge>
    );
};