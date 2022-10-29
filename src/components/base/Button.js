import styled from "styled-components";

export const Button = styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--color-${({color, border}) => border ? color : 'rice'});
    background-color: var(--color-${({color, border}) => border ? 'transparent' : color});
    border: 2px solid var(--color-${({color}) => color});
    border-radius: 0.4em;
    display: flex;
    direction: row;
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
        color: var(--color-rice);
        background-color: var(--color-${({color}) => color}${({border}) => !border && '-light'});
        border: 2px solid var(--color-${({color}) => color}${({border}) => !border && '-light'});
    }

    &:active {
        color: var(--color-${({color, border}) => border ? color : 'rice'}-dark);
        background-color: var(--color-${({color, border}) => border ? 'transparent' : color + '-dark'});
        border: 2px solid var(--color-${({color}) => color}-dark);
    }

    &:disabled {
        opacity: 0.6;
        pointer-events: none;
    }
`;