import { useRef } from "react";
import styled from 'styled-components';
import { FlexContainer } from '../../components';
import { ItemList } from "./ItemList";

const Container = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-lg);
    padding-bottom: var(--space-lg);
`;



export const ItemListContainer = ({items}) => {
    const favs = useRef(JSON.parse(localStorage.getItem('favs')) ?? []);

    const listsByCategory = Object.entries(items).map(([category, itemList]) => {
        
        return <ItemList key={category} id={category} itemList={itemList} favs={favs}/>
    });

    return(
        <Container>
            {listsByCategory}
        </Container>
    );
};