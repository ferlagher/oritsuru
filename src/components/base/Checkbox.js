import styled from "styled-components";

export const Checkbox = styled.input.attrs({
    type: 'checkbox',
})`
    appearance: none;
    height: 1.5em;
    width: 1.5em;
    border: var(--border) var(--color-primary);
    border-radius: var(--border-radius);
    background-color: var(--color-background-light);
    position: relative;
    overflow: hidden;

    &:hover, &:focus-visible {
        outline: var(--border) var(--color-primary);
    }

    &::after {
        content: '';
        position: absolute;
        border-bottom: 0.25em solid var(--color-background-light);
        border-right: 0.25em solid var(--color-background-light);
        height: 50%;
        width: 20%;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::before {
        content: '';
        position: absolute;
        height: 0;
        width: 0;
        border-radius: 50%;
        background-color: var(--color-primary);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.2s ease-in-out;
    }

    &:checked::before {
        height: 150%;
        width: 150%;
    }
`;