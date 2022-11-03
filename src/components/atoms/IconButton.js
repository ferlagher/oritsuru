import styled from "styled-components";

export const IconButton = styled.button`
    font-size: 1em;
    line-height: 1em;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75em;
    margin: -0.75em;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    svg {
        fill: currentColor;
    }

    &:hover {
    }

    &:active {
    }

    &:disabled {
        opacity: 0.6;
        pointer-events: none;
    }
`;