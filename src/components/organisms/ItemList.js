import styled from "styled-components";
import { FlexContainer } from "../atoms";

export const ItemList = styled(FlexContainer).attrs({
    as: 'ul',
})`
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: var(--space-sm);
`;