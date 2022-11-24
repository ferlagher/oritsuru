import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context";
import { Button, FlexContainer, PlusIcon } from "../../components";

const ListItem = styled(FlexContainer).attrs({
    as: 'li',
})`
    justify-content: space-between;
    gap: 0.5em;
    width: 100%;
    margin-bottom: var(--space-sm);

    img {
        height: 4rem;
        width: 5rem;
        object-fit: contain;
    }

    button svg {
        transform: rotate(45deg);
    }
`;

export const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext);
    return(
        <ListItem>
            <FlexContainer gap='var(--space-sm)'>
                <img src={item.image} alt={item.title}/>
                <h4>{item.title}</h4>
            </FlexContainer>

            <FlexContainer gap='var(--space-sm)'>
                <span>
                    {`$${item.price} × ${item.quantity} = `}
                    <b>${item.price * item.quantity}</b>
                </span>
                <Button onClick={() => removeItem(item.id)} $border><PlusIcon/></Button>
            </FlexContainer>
        </ListItem>
    )
};