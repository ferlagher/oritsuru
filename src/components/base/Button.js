import styled from "styled-components";

export const Button = styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: ${({theme, color, border}) => border ? theme.base[color] : theme.base.rice};
    background-color: ${({theme, color, border}) => border ? 'transparent' : theme.base[color]};
    border: 2px solid ${({theme, color}) => theme.base[color]};
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
        color: ${({theme}) => theme.base.rice};
        background-color: ${({theme, color, border}) => border ? theme.base[color] : theme.light[color]};
        border: 2px solid ${({theme, color, border}) => border ? theme.base[color] : theme.light[color]};
    }

    &:active {
        color: ${({theme, color, border}) => border ? theme.dark[color] : theme.dark.rice};
        background-color: ${({theme, color, border}) => border ? 'transparent' : theme.dark[color]};
        border: 2px solid ${({theme, color}) => theme.dark[color]};
    }

    &:disabled {
        opacity: 0.6;
        pointer-events: none;
    }
`;