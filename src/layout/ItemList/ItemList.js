import styled from "styled-components";
import { FlexContainer, Item } from "../../components";

const KANJIS = {
    nigiri: '握り',
    sashimi: '刺身',
    gunkan: '軍艦',
    temaki: '手巻き',
    roll: '巻き',
    error: '❌❗',
    default: '寿司',
};

const ListContainer = styled(FlexContainer)`
    width: 100%;
    gap: var(--space-lg);
    margin-bottom: calc(var(--space-lg) * 3);

    &:last-of-type {
        margin-bottom: 0;
    }
    `;

const TitleContainer = styled(FlexContainer)`
    align-self: flex-start;
    flex-direction: column;
    border: 0.2em solid var(--color-secondary);
    border-radius: 2px;
    margin-bottom: -100%;
    width: 3em;
    
    h3 {
        font-size: 1.3em;
        font-weight: 700;
        text-transform: uppercase;
        writing-mode: vertical-lr;
        text-orientation: upright;
        width: 100%;
        color: var(--color-background);
        background-color: var(--color-secondary);
        padding: 0.35em;
        border: 1px solid var(--color-background);
        border-radius: 1px;
    }
    
    span {
        font-family: 'Murecho', sans-serif;
        font-weight: 500;
        font-size: 0.8em;
        white-space: nowrap;
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

export const ItemList = ({title, itemList, favs}) => {
    const listElements = itemList?.map(item => <Item item={item} key={item.id} favs={favs}/>);
    const kanji = KANJIS[title] || KANJIS.default;

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