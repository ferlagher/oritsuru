import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context";
import { FlexContainer, EmptyState, Button, PlusIcon } from "../../components";
import { CartItem } from "./CartItem";

const Container = styled(FlexContainer)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-sm);

    &.small {
        position: sticky;
        top: var(--space-lg);
        font-size: 0.5rem;

        img, button, a {
            display: none;
        }
    }
`;

const EmptyCart = styled(FlexContainer)`
    flex-direction: column;
    height: 100%;
    
    &.small {
        position: sticky;
        top: var(--space-lg);
        font-size: 0.5rem;
        height: initial;

        a, h3 {
            display: none;
        }
    }
`;

const List = styled(FlexContainer).attrs({
    as: 'ul',
})`
    flex-direction: column;
    flex: auto;
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

const ButtonsContainer = styled(FlexContainer)`
    justify-content: flex-end;
    gap: var(--space-sm);
    width: 100%;
`;

export const Cart = ({$small = false}) => {
    const {cartList, total, clear} = useContext(CartContext);
    const listItems = cartList.map(item => <CartItem key={item.id} item={item}/>);

    return(
        <section>{
            listItems.length === 0 ? 
            <EmptyCart className={$small ? 'small' : ''}>
                <EmptyState view='cart'>
                    <Button to='/'>Ver menú</Button>
                </EmptyState>
            </EmptyCart>
            :
            <Container className={$small ? 'small' : ''}>
                <h3>Carrito:</h3>
                <List>
                    {listItems}
                </List>
                <TotalContainer>
                    <span>Total: <b>${total}</b></span>
                    <Button onClick={clear} $border><PlusIcon/></Button>
                </TotalContainer>
                <ButtonsContainer>
                    <Button to='/'>Seguir comprando</Button>
                    <Button to='/checkout'>Confirmar pedido</Button>
                </ButtonsContainer>
            </Container>
        }</section>
    )
};