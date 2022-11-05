import styled from "styled-components";

export const Button = styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1em;
    color: var(--color-${({color, border}) => border ? color : 'rice'});
    background-color: var(--color-${({color, border}) => border ? 'transparent' : color});
    border: 2px solid var(--color-${({color}) => color});
    border-top: 2px solid var(--color-${({color}) => color}-light);
    border-left: 2px solid var(--color-${({color}) => color}-light);
    border-radius: 0.4em;
    box-shadow: var(--shadow-sm);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0.75em;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    svg {
        fill: currentColor;
    }

    &:hover {
        color: var(--color-rice-light);
        box-shadow: var(--shadow-md);
    }

    &:active {
        color: var(--color-rice-dark);
        background-color: var(--color-${({color}) => color}-dark);
        border: 2px solid var(--color-${({color}) => color}-dark);
        box-shadow: 0 0 0 #000;
    }

    &:disabled {
        opacity: 0.6;
        pointer-events: none;
    }
`;