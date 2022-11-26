import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link).attrs(({onClick}) => ({
    as: onClick && 'button',
}))`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1em;
    color: var(--color-${({$border}) => $border ? 'primary': 'background-light'});
    background-color: var(--color-${({$border}) => $border ? 'background' : 'primary'});
    border: var(--border) var(--color-primary);
    border-radius: var(--border-radius);
    box-shadow: 
        0 0 0 var(--color-primary-dark),
        0.15em 0.15em 0 var(--color-background-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0.3em;
    transform: skewY(var(--skew-deg));
    cursor: pointer;
    transition: 0.2s ease-in-out;

    svg {
        fill: currentColor;
        height: 1em;
        width: 1em;
    }

    &:hover, &:focus-visible {
        translate: -0.15em -0.15em;
        box-shadow: 
            0.15em 0.15em 0 var(--color-primary-dark),
            0.3em 0.3em 0 var(--color-background-dark);
        outline: none;
    }

    &:active {
        translate: 0 0;
        box-shadow: 
            0 0 0 var(--color-primary-dark),
            0.1em 0.1em 0 var(--color-background-dark);
    }

    &:disabled {
        opacity: 0.6;
        pointer-events: none;
        box-shadow: 
            0 0 0 var(--color-primary-dark),
            0.1em 0.1em 0 var(--color-background-dark);
    }
`;