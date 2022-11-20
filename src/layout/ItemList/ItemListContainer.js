import { useContext } from 'react';
import styled from 'styled-components';
import { Toggle, FlexContainer, Loader, HeartIcon, LeafIcon } from '../../components';
import { ItemsContext } from '../../context';
import { useItemListContainer } from './useItemListContainer';

const Container = styled(FlexContainer).attrs({
    as: 'section',
})`
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--space-lg);
`;

export const ItemListContainer = () => {
    const {items, isLoading} = useContext(ItemsContext);
    const {list, setIsFav, setIsVeggie} = useItemListContainer(items);

    return(
        <Container>
            <FlexContainer>
                <span>Filtros:</span>
                <Toggle onToggle={setIsFav}><HeartIcon/></Toggle>
                <Toggle onToggle={setIsVeggie}><LeafIcon/></Toggle>
            </FlexContainer>
            {isLoading ? <Loader/> : list}
        </Container>
    );
};