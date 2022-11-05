import styled from 'styled-components';
import { FlexContainer } from '../../components';
import { ItemList } from "./ItemList";

//Testing stuff
import { Item } from "../../components";
import { testItems } from "../../components/Item/testItems";
import { useRef } from "react";

const Container = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-lg);
`;



export const ItemListContainer = () => {
    const favs = useRef(JSON.parse(localStorage.getItem('favs')) ?? []);

    const itemList = testItems.map(item => <Item item={item} key={item.id} favs={favs}/>)

    return(
        <Container>
            <ItemList title='nigiris'>
                {itemList}
                {itemList}
            </ItemList>
            <ItemList title='nigiris'>
                {itemList}
                {itemList}
            </ItemList>
            <ItemList title='nigiris'>
                {itemList}
                {itemList}
            </ItemList>
            <ItemList title='nigiris'>
                {itemList}
                {itemList}
            </ItemList>
        </Container>
    );
};