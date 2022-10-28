import { FlexContainer } from "./base";

export const ItemListContainer = ({children, greeting}) => {
    return(
        <FlexContainer direction='column' padding='1em' gap='1rem'>
            <h2>{greeting}</h2>
            <FlexContainer wrap='wrap' gap='1rem'>
                {children}
            </FlexContainer>
        </FlexContainer>
    );
};