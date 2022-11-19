import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { FlexContainer, Loader } from '../../components';
import { ItemsContext } from '../../context';
import { group } from '../../utils';
import { ItemList } from "./ItemList";

const ListContainer = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: calc((var(--space-lg) * 3));
    padding-bottom: var(--space-lg);
`;

export const ItemListContainer = () => {
    const {isLoading, items} = useContext(ItemsContext);
    const {id} = useParams();

    useEffect(() => {
        const el = document.getElementById(id);
        el && el.scrollIntoView();
    }, [id, isLoading]);

    const itemsByCategory = group(items, 'categoryId');

    const listsByCategory = Object.entries(itemsByCategory).map(([category, itemList]) => {
        return <ItemList key={category} id={category} itemList={itemList}/>
    });

    return(
        <ListContainer>
            {isLoading ? <Loader/> : listsByCategory}
        </ListContainer>
    );
};