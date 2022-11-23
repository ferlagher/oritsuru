import styled from 'styled-components';
import { Toggle, FlexContainer, Loader, HeartIcon, LeafIcon, EmptyState } from '../../components';
import { useItemListContainer } from './useItemListContainer';

const Container = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-lg);
`;

const StyledToggle = styled(Toggle)`
    font-weight: 500;
    color: var(--color-primary);
    padding: 0.1em;
    border: 0.15em solid var(--color-secondary);
    border-radius: 2px;
    
    &:has(input:checked) {
        color: var(--color-background);
        background-color: var(--color-primary);
        border-color: var(--color-primary);
    }
    
    &:hover, &:has(input:focus) {
        border-color: var(--color-primary);
    }

    svg {
        fill: currentColor;
    }
`;

export const ItemListContainer = () => {
    const {list, isLoading, setIsFav, setIsVeggie} = useItemListContainer();

    return(
        <Container>
            <FlexContainer justify='flex-start' gap='var(--space-sm)'>
                <StyledToggle onToggle={setIsFav} $color='primary'><HeartIcon/>Favoritos</StyledToggle>
                <StyledToggle onToggle={setIsVeggie} $color='accent'><LeafIcon/>Veggie</StyledToggle>
            </FlexContainer>
            {isLoading ? <Loader/> :
            list.length ? list : <EmptyState view='itemList'/>}
        </Container>
    );
};