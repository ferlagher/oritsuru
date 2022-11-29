import styled from "styled-components";
import { FlexContainer, Loader } from "../../components";
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
    border-bottom: var(--border) var(--color-background-dark);
    `;

const TotalContainer = styled(FlexContainer)`
    justify-content: flex-end;
    gap: var(--space-sm);
    width: 100%;
    font-size: 1.3em;

    button svg {
        transform: rotate(45deg);
    }
`;

export const OrderDetail = () => {
    const [order, isLoading] = useOrderDetail();
    const {id, date, total, products} = order;
    
    return(
        <section>{
            isLoading ?
            <Loader/> :
            <Container>
                <h2>Orden <span>#{id?.toUpperCase()}</span></h2>
                <span>Fecha de compra: {date}</span>
                <List>
                    {products?.map(item => <OrderItem key={item.id} item={item}/>)}
                </List>
                <TotalContainer>
                    <span>Total: <b>${total}</b></span>
                </TotalContainer>
            </Container>
        }</section>
    );
};