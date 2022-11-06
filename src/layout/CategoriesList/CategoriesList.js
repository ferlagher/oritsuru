import styled from 'styled-components';
import { fadeIn } from '../../utils/keyframes';

const ListContainer = styled.aside`
    width: 20%;
    align-self: stretch;
    background-color: var(--color-bg-dark);
    padding: var(--space-lg);
`;

const ListTitle = styled.h3`
    margin-bottom: 1em;
`;

const List = styled.ul`
    list-style: none;
    position: sticky;
    top: var(--space-lg);

    li {
        text-transform: capitalize;
        margin-bottom: var(--space-sm);
        animation: ${fadeIn} 0.2s ease-in-out;
    }
`;

export const CategoriesList = ({categories}) => {
    const listItems = categories.map(category => <li key={category}><a href={'#' + category}>{category}</a></li>)

    return(
            <ListContainer>
                <List>
                    <ListTitle>Categorías</ListTitle>
                    {listItems}
                </List>
            </ListContainer>
    );
};