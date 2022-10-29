import '../assets/fonts/fontFace.css'
import { createGlobalStyle } from 'styled-components';
import { themes } from '../themes';

export const GlobalStyle = createGlobalStyle`
    :root {
        ${({theme}) => themes[theme]}
        font-size: clamp(1rem, 3.5vw, 1.125rem);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        font-family: 'Ubuntu', sans-serif;
        color: var(--color-text);
        fill: var(--color-text);
        background-color: var(--color-bg);
        transition-property: color, fill, background-color;
        transition-duration: 0.2s;
    }

    main {
        flex-grow: 1;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }
`;