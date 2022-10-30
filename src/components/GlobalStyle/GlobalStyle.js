import '../../assets/fonts/fontFace.css'
import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: clamp(1rem, 3.5vw, 1.125rem);

        --space-sm: clamp(8px, 2.5vw, 16px);
        --space-lg: clamp(16px, 3vw, 32px);
        --max-width: 1200px;
        
        ${({theme}) => themes[theme]}
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
        align-items: stretch;
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }
`;