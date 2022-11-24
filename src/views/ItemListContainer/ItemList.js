import styled from "styled-components";
import { FlexContainer } from "../../components";
import { Item } from "./Item";

const ListContainer = styled(FlexContainer)`
    width: 100%;
    gap: var(--space-lg);
    margin-bottom: calc(var(--space-lg) * 3);

    &:last-of-type {
        margin-bottom: 0;
    }

    @media (orientation: portrait) {
        flex-direction: column;
    }
    `;

const TitleContainer = styled(FlexContainer)`
    align-self: flex-start;
    gap: 0.25em;
    
    h3 {
        font-size: 1.3em;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    span {
        font-family: 'Murecho', sans-serif;
        font-weight: 500;
        font-size: 0.8em;
        white-space: nowrap;
        color: var(--color-background);
        background-color: var(--color-secondary);
        border-radius: 1px;
        padding: 0.1em;
    }

    @media (orientation: landscape) {
        flex-direction: column;
        gap: 0;
        border: 0.2em solid var(--color-secondary);
        border-radius: 2px;
        width: 3em;
        
        h3 {
            writing-mode: vertical-lr;
            text-orientation: upright;
            color: var(--color-background);
            background-color: var(--color-secondary);
            width: 100%;
            padding: 0.35em;
            border: 1px solid var(--color-background);
            border-radius: 1px;
        }

        span {
            writing-mode: horizontal-tb;
            color: var(--color-secondary);
            background-color: transparent;
            padding: 0;
        }
    }
`;

const List = styled(FlexContainer).attrs({
    as: 'ul',
})`
    justify-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    gap: var(--space-lg);
    list-style: none;
    z-index: 1;
`;

export const ItemList = ({title, kanji, itemList}) => {
    const listElements = itemList?.map(item => <Item item={item} key={item.id}/>);

    return(
        <ListContainer>
            <TitleContainer>
                <h3>{title}</h3>
                <span>{kanji}</span>
            </TitleContainer> 
            <List>
                {listElements}
            </List>
        </ListContainer>
    );
};