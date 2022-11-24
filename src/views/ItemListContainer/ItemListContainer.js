import styled from 'styled-components';
import { Toggle, FlexContainer, HeartIcon, LeafIcon,} from '../../components';
import { useItemListContainer } from './useItemListContainer';

const Container = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-lg);
`;

const ToggleButton = styled(Toggle)`
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

    &:has(input:disabled) {
        opacity: 0.5;
        pointer-events: none;
    }
    
    &:hover, &:has(input:focus-visible) {
        border-color: var(--color-primary);
    }

    svg {
        fill: currentColor;
    }
`;

export const ItemListContainer = () => {
    const {renderList, isLoading, setIsFilteringFav, setIsFilteringVeggie} = useItemListContainer();

    return(
        <Container>
            <FlexContainer justify='flex-start' gap='var(--space-sm)'>
                <ToggleButton onToggle={setIsFilteringFav} disabled={isLoading}><HeartIcon/>Favoritos</ToggleButton>
                <ToggleButton onToggle={setIsFilteringVeggie} disabled={isLoading}><LeafIcon/>Veggie</ToggleButton>
            </FlexContainer>
            {renderList()}
        </Container>
    );
};