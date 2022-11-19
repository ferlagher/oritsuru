import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context";
import { FlexContainer } from "../";
import { CartItem } from "./CartItem";

const Container = styled(FlexContainer)``;
const List = styled.ul``;

export const Cart = () => {
    const {cartList, removeItem, clear} = useContext(CartContext);
    const listItems = cartList.map(item => <CartItem key={item.id} item={item}/>)

    return(
        <Container>
            <List>
                {listItems}
            </List>
        </Container>
    )
};