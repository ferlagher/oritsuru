import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: ${({direction = 'row'}) => direction};
    justify-content: ${({justify = 'center'}) => justify};
    align-items: ${({aling = 'center'}) => aling};
    flex: ${({flex}) => flex};
    gap: ${({gap}) => gap};
    padding: ${({padding}) => padding};
`;