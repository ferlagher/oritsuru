import styled from "styled-components";
import { FlexContainer } from "../../components";

const ListContainer = styled(FlexContainer).attrs({
    as: 'ul',
})`
    flex: auto;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: var(--space-sm);
`;

export const ItemList = ({title, children}) => {
    return(
        <ListContainer>
            <h3>{title}</h3>
            {children}
        </ListContainer>
    );
};