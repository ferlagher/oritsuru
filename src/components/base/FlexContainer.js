import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({$direction = 'row'}) => $direction};
    justify-content: ${({$justify = 'center'}) => $justify};
    align-items: ${({$align = 'center'}) => $align};
    flex-wrap: ${({$wrap}) => $wrap}; 
    gap: ${({$gap}) => $gap};
    ${({$card}) => $card && `
        box-shadow: 0.3rem 0.3rem 0 var(--color-secondary);
        border-radius: var(--border-radius);
        border: var(--border) var(--color-secondary);
    `}
`;