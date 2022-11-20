import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context";
import { FlexContainer, Button, PlusIcon } from "../";
import { CartItem } from "./CartItem";

const Container = styled(FlexContainer).attrs({
    as: 'section',
})`
    flex-direction: column;
    gap: var(--space-sm);

    &.small {
        position: sticky;
        top: var(--space-lg);
        font-size: 0.5rem;

        img, button {
            display: none;
        }
    }
`;

const List = styled(FlexContainer).attrs({
    as: 'ul',
})`
    flex-direction: column;
    width: 100%;
    border-bottom: 0.2em solid var(--color-background-dark);
    `;

const TotalContainer = styled(FlexContainer)`
    justify-content: flex-end;
    gap: var(--space-sm);
    width: 100%;

    button svg {
        transform: rotate(45deg);
    }
`;

export const Cart = ({$small = false}) => {
    const {cartList, clear} = useContext(CartContext);
    const listItems = cartList.map(item => <CartItem key={item.id} item={item}/>);
    const total = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
        <Container className={$small ? 'small' : ''}>
            <h3>Carrito:</h3>
            <List>
                {listItems.length === 0 ? 'oe' : listItems}
            </List>
            <TotalContainer>
                <span>Total: <b>${total}</b></span>
                <Button onClick={clear} $border><PlusIcon/></Button>
            </TotalContainer>
        </Container>
    )
};