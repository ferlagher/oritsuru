import styled from "styled-components";
import { FlexContainer } from "../../components";

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

export const ItemList = ({title, children}) => {
    return(
        <FlexContainer direction='column' padding='0 var(--space-lg)' gap='var(--space-sm)' flex='auto'>
            <ListTitle>{title}</ListTitle>
            <List>
                {children}
            </List>
        </FlexContainer>
    );
};