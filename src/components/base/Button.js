import styled from "styled-components";

export default styled.button`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: ${({theme, color, border}) => border ? theme.colors[color] : theme.colors.rice};
    background-color: ${({theme, color, border}) => border ? 'transparent' : theme.colors[color]};
    border: 2px solid ${({theme, color }) => theme.colors[color]};
    border-radius: 0.4em;
    box-shadow: 0 0 0.5rem #00000040;
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0.75em 0.75em;
    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    &:hover {
        filter: brightness(1.15);
    }

    svg {
        fill: currentColor;
    }

    ${({hideOnMobile}) => hideOnMobile && `
        @media (max-width: 425px) {
            span {
                display: none;
            }
        }
    `}
`;