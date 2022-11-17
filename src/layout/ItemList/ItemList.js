import styled from "styled-components";
import { FlexContainer, Item } from "../../components";
import { fadeIn } from "../../utils/keyframes";
import { gridBkgd, halftoneBkgd } from "../../utils/mixins";

const kanjiList = {
    nigiri: '握り',
    sashimi: '刺身',
    gunkan: '軍艦',
    temaki: '手巻き',
    roll: '巻き',
}

const ListContainer = styled(FlexContainer)`
    width: 100%;
    gap: var(--space-lg);
    flex: auto;
    transform: skewY(var(--skew-deg));

    &:nth-of-type(2n) {
        flex-direction: row-reverse;
    }
    `;

const TitleContainer = styled(FlexContainer)`
    flex-direction: column;
    border: 0.2em solid var(--color-secondary);
    border-radius: 2px;
    
    h3 {
        font-size: 2em;
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
        font-size: 1.2em;
        white-space: nowrap;
        color: var(--color-secondary);
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
    padding: var(--space-lg);
    list-style: none;
    z-index: 1; 

    li {
        transform: skewY(calc(var(--skew-deg) * -1));
    }

    &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 50%;
    translate: 0 50%;
    height: 7.3rem;
    width: calc(100% - 0.2em);
    ${gridBkgd('var(--color-secondary)')}
    z-index: 0;
    }
`;

export const ItemList = ({id, itemList, favs}) => {
    const listElements = itemList.map(item => <Item item={item} key={item.id} favs={favs}/>)
    const kanji = kanjiList[id];

    return(
        <ListContainer id={id}>
            <TitleContainer>
                <h3>{id}</h3>
                <span>{kanji}</span>
            </TitleContainer> 
            <List>
                {listElements}
            </List>
        </ListContainer>
    );
};