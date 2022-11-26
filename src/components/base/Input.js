import styled from "styled-components";

export const Input = styled.input`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1rem;
    width: 100%;
    color: var(--color-secondary);
    border-radius: var(--border-radius);
    border: var(--border) var(--color-primary);
    background-color: var(--color-background-light);
    padding: 0.3em;

    &:hover, &:focus-visible {
        outline: var(--border) var(--color-primary);
    }
`;