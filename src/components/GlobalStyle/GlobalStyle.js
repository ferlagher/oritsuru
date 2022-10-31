import '../../assets/fonts/fontFace.css'
import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: clamp(1rem, 3.5vw, 1.125rem);

        ${({theme}) => themes[theme]}

        --space-sm: clamp(8px, 2.5vw, 16px);
        --space-lg: clamp(16px, 3vw, 32px);
        --max-width: 1200px;

        --shadow-sm:
            0.5px 0.5px 0.3px hsl(0deg, 0%, 0%, 0.12),
            1.1px 1.1px 2.4px -1.2px hsl(0deg, 0%, 0%, 0.13);
        --shadow-md:
            0.2px 0.2px 0.3px hsl(0deg, 0%, 0%, 0.09),
            0.8px 0.8px 1.3px -1.2px hsl(0deg, 0%, 0%, 0.10),
            3px 3.1px 4.9px -2.5px hsl(0deg, 0%, 0%, 0.11);
        --shadow-lg:
            0.2px 0.2px 0.3px hsl(0deg, 0%, 0%, 0.10),
            1.8px 1.8px 2.9px -0.8px hsl(0deg, 0%, 0%, 0.11),
            5.4px 5.4px 8.6px -1.7px hsl(0deg, 0%, 0%, 0.12),
            13.9px 14px 22.2px -2.5px hsl(0deg, 0%, 0%, 0.13);
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