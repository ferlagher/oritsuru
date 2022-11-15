import styled from "styled-components";

export const Button = styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 1em;
    text-transform: uppercase;
    color: var(--color-foreground);
    background-color: var(--color-${({color, border}) => border ? 'transparent' : color});
    background-image: 
        radial-gradient(var(--color-${({color}) => color}-transparent) 28%, transparent 28%),
        radial-gradient(var(--color-${({color}) => color}-transparent) 28%, transparent 28%);
    background-position: 0px 0px, 3px 3px;
    background-size: 6px 6px;
    border: 2px solid var(--color-${({color}) => color});
    box-shadow: 0 0 0 var(--color-${({color}) => color}-dark),
        0.2em 0.2em 0 var(--color-secondary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0.75em;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    svg {
        fill: currentColor;
        height: 1em;
        width: 1em;
    }

    &:hover {
        translate: -0.2em -0.2em;
        box-shadow: 0.2em 0.2em 0 var(--color-${({color}) => color}-dark),
        0.4em 0.4em 0 var(--color-secondary-dark);
    }

    &:active {
        translate: 0 0;
        box-shadow: 0 0 0 var(--color-${({color}) => color}-dark),
        0.2em 0.2em 0 var(--color-secondary-dark);
    }

    &:disabled {
        opacity: 0.6;
        pointer-events: none;
        box-shadow: 0 0 0 var(--color-${({color}) => color}-dark),
        0.1em 0.1em 0 var(--color-secondary-dark);
    }
`;