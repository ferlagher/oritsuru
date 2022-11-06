import styled from "styled-components";
import { FlexContainer } from "../../components";
import { Item } from "../../components";
import { fadeIn } from "../../utils/keyframes";

const ListContainer = styled(FlexContainer)`
    flex-direction: column;
    padding: 0 var(--space-lg);
    gap: var(--space-sm);
    flex: auto;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const ListTitle = styled.h3`
    text-align: center;
    text-transform: uppercase;
    background: radial-gradient(circle at 50% 50%, var(--color-bg-dark), transparent);
    width: 100%;
    padding: 0.5em;
    position: sticky;
    top: 0;
    z-index: 2;
`;

const List = styled(FlexContainer).attrs({
    as: 'ul',
})`
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: var(--space-sm);
`;

export const ItemList = ({id, itemList, favs}) => {
    const listElements = itemList.map(item => <Item item={item} key={item.id} favs={favs}/>)

    return(
        <ListContainer id={id}>
            <ListTitle>{id}</ListTitle>
            <List>
                {listElements}
            </List>
        </ListContainer>
    );
};