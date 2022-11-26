import styled from "styled-components";
import { FlexContainer } from "../../components";
import { Item } from "./Item";

const ListContainer = styled(FlexContainer)`
    width: 100%;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

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
        border: var(--border) var(--color-secondary);
        border-radius: var(--border-radius);
        width: 3em;
        
        h3 {
            writing-mode: vertical-lr;
            text-orientation: upright;
            color: var(--color-background);
            background-color: var(--color-secondary);
            width: 100%;
            padding: 0.35em;
            border: 0.05rem solid var(--color-background);
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

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, auto));
    position: relative;
    width: 100%;
    gap: var(--space-sm);
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