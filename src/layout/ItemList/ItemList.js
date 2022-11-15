import styled from "styled-components";
import { FlexContainer, Item } from "../../components";
import { fadeIn } from "../../utils/keyframes";

const ListContainer = styled(FlexContainer)`
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex: auto;
    animation: ${fadeIn} 0.5s ease-in-out;
    position: relative;

    &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 7.6rem;
    width: 100%;
    background-image: 
        linear-gradient(var(--color-secondary-light) 0.1em, transparent 0.1em), 
        linear-gradient(90deg, var(--color-secondary-light) 0.1em, transparent 0.1em);
    background-size: 1.5rem 1.5rem;
    transform: var(--skew);
    z-index: 0;
    }
`;

const ListTitle = styled.h3`
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-secondary);
    width: fit-content;

`;

const List = styled(FlexContainer).attrs({
    as: 'ul',
})`
    max-width: 100%;
    justify-content: flex-start;
    gap: var(--space-lg);
    padding: var(--space-lg);
    list-style: none;
    overflow-x: auto;
    transform: var(--skew);
    z-index: 1; 

    li {
        transform: skew(6deg) rotate(6deg);
    }
`;

export const ItemList = ({id, itemList, favs}) => {
    const listElements = itemList.map(item => <Item item={item} key={item.id} favs={favs}/>)

    return(
        <ListContainer id={id}>
            <ListTitle><span>{id}</span></ListTitle>
            <List>
                {listElements}
            </List>
        </ListContainer>
    );
};