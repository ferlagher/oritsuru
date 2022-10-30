import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({direction = 'row'}) => direction};
    justify-content: ${({justify = 'center'}) => justify};
    align-items: ${({align = 'center'}) => align};
    flex-wrap: ${({wrap}) => wrap};
    gap: ${({gap}) => gap};
    padding: ${({padding}) => padding};
    flex: ${({flex}) => flex};
`;