import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer } from '../../components';
import { ItemList } from "./ItemList";

//Testing stuff
import { Item } from "../../components";
import { testItems } from "../../components/Item/testItems";
import { useRef } from "react";

const Container = styled(FlexContainer)`
    height: 100%;
    width: 100%;
    justify-content: space-between;
`;

const CategoriesList = styled(FlexContainer).attrs({
    as: 'ul',
})`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 20%;
    background-color: var(--color-bg-dark);
    list-style: none;
    padding: var(--space-sm);
`;

export const ItemListContainer = () => {
    const favs = useRef(JSON.parse(localStorage.getItem('favs')) ?? []);

    const itemList = testItems.map(item => <Item item={item} key={item.id} favs={favs}/>)

    return(
        <Container>
            <CategoriesList>
                <li><Link to='#'>aa</Link></li>
                <li><Link to='#'>aa</Link></li>
                <li><Link to='#'>aa</Link></li>
            </CategoriesList>
            <ItemList>
                {itemList}
            </ItemList>
        </Container>
    );
};