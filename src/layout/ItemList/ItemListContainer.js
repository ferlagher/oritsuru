import { useContext } from 'react';
import styled from 'styled-components';
import { FlexContainer, Loader } from '../../components';
import { ItemsContext } from '../../context';
import { useItemListContainer } from './useItemListContainer';

const ListContainer = styled(FlexContainer).attrs({
    as: 'section',
})`
    width: 100%;
    flex-direction: column;
    gap: calc((var(--space-lg) * 3));
    padding-bottom: var(--space-lg);
`;

export const ItemListContainer = () => {
    const {items, isLoading} = useContext(ItemsContext);
    const list = useItemListContainer(items);

    return(
        <ListContainer>
            {isLoading ? <Loader/> : list}
        </ListContainer>
    );
};