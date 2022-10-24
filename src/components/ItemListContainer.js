import { FlexContainer } from "./FlexContaier";


export const ItemListContainer = ({greeting}) => {
    return(
        <FlexContainer padding='0.5em'><b>{greeting}</b></FlexContainer>
    );
};