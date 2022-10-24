import styled from "styled-components";

export const Anchor = styled.a`
    color: currentColor;
    transition: color 0.2s ease-in-out;

    &:link,
    &:visited {
        color: currentColor;
        text-decoration: none;
    }

    &:hover {
        color: ${({theme}) => theme.colors.salmon};
    }
`;