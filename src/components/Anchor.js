import styled from "styled-components";
import { colors } from "../theme";

const StyledAnchor = styled.a`
    color: ${colors.salmon};

    &:link,
    &:visited {
        color: ${colors.salmon};
        text-decoration: none;
    }
`

export const Anchor = ({href, children}) => {
    return(
        <StyledAnchor href={href}>{children}</StyledAnchor>
    );
};