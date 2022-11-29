import styled from "styled-components";
import { EmptyState, FlexContainer, Loader } from "../../components";
import { OrderItem } from "./OrderItem";
import { useOrderDetail } from "./useOrderDetail";

const Container = styled(FlexContainer).attrs({
    $card: true,
})`
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: var(--space-lg);
    padding: var(--space-lg);

    h2 span {
        font-size: 0.6em;
    }
`;

const List = styled(FlexContainer).attrs({
    as: 'ul',
})`
    flex-direction: column;
    flex: auto;
    width: 100%;
    `;

const TotalContainer = styled(FlexContainer)`
    flex-direction: column;
    align-items: flex-end;
    gap: var(--space-sm);
    width: 100%;

    b {
        font-size: 1.2em;
    }
`;

export const OrderDetail = () => {
    const [order, isLoading] = useOrderDetail();
    const {id, date, subtotal, total, products} = order;
    
    return(
        <section>{
            isLoading ?
            <Loader/> :
            !order.id ? <EmptyState view='noOrder'/> :
            <Container>
                <h2>Tu orden <span>#{id?.toUpperCase()}</span></h2>
                <span>Fecha de compra: {date}</span>
                <List>
                    {products?.map(item => <OrderItem key={item.id} item={item}/>)}
                </List>
                <TotalContainer>
                    <span>Subtotal: ${subtotal}</span>
                    <span>Envío: ${total - subtotal}</span>
                    <span>Total: <b>${total}</b></span>
                </TotalContainer>
            </Container>
        }</section>
    );
};