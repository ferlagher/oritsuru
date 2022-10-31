import styled from 'styled-components';
import { FlexContainer } from "../atoms";

//Testing stuff
import { Item, ItemDetail } from "../molecules";
import { ItemList } from "./ItemList";
import { testItems } from "../molecules/Item/testItems";
import { useRef } from "react";

const Container = styled(FlexContainer)`
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-sm);
    max-width: var(--max-width);
`;

export const ItemListContainer = ({greeting}) => {
    const favs = useRef(JSON.parse(localStorage.getItem('favs')) ?? []);

    const itemList = testItems.map(item => <Item item={item} key={item.id} favs={favs}/>)
    const itemDetailList = testItems.map(item => <ItemDetail item={item} key={item.id} favs={favs}/>)

    return(
        <Container>
            <h2>{greeting}</h2>
            <ItemList>
                {itemList}
                {itemList}
            </ItemList>
            <FlexContainer wrap='wrap' gap='var(--space-sm)'>
                {itemDetailList}
            </FlexContainer>
        </Container>
    );
};