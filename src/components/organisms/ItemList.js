import styled from "styled-components";
import { FlexContainer } from "../atoms";

export const ItemList = styled(FlexContainer).attrs({
    as: 'ul',
})`
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`;