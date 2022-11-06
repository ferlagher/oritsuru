import { useRef } from "react";
import styled from 'styled-components';
import { FlexContainer, Loader } from '../../components';
import { ItemList } from "./ItemList";

const Container = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: var(--space-lg);
    padding-bottom: var(--space-lg);
`;



export const ItemListContainer = ({isLoading, items}) => {

    const listsByCategory = Object.entries(items).map(([category, itemList]) => {
        return <ItemList key={category} id={category} itemList={itemList}/>
    });

    return(
        <Container>
            {isLoading ? <Loader/> : listsByCategory}
        </Container>
    );
};