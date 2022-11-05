import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';
import bg from '../assets/background.svg'
import '../assets/fonts/fontFace.css'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Ubuntu', sans-serif;
        font-size: clamp(1rem, 3.5vw, 1.125rem);
        color: var(--color-text);
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;

        ${({theme}) => themes[theme]}

        --space-sm: clamp(8px, 2.5vw, 16px);
        --space-lg: clamp(16px, 3vw, 32px);
        --max-width: 1200px;

        --shadow-inset:
            inset 1px 1px 1px hsl(0deg, 0%, 0%, 0.13),
            inset 3px 3px 2px -1.2px hsl(0deg, 0%, 0%, 0.12);
        --shadow-sm:
            1px 1px 1px hsl(0deg, 0%, 0%, 0.13),
            3px 3px 2px -1.2px hsl(0deg, 0%, 0%, 0.12);
        --shadow-md:
            2px 2px 2px hsl(0deg, 0%, 0%, 0.08),
            4px 4px 4px -0.8px hsl(0deg, 0%, 0%, 0.09),
            6px 6px 6px -1.7px hsl(0deg, 0%, 0%, 0.10);
        --shadow-lg:
            0.2px 0.2px 0.3px hsl(0deg, 0%, 0%, 0.07),
            1.8px 1.8px 2.9px -0.8px hsl(0deg, 0%, 0%, 0.08),
            5.4px 5.4px 8.6px -1.7px hsl(0deg, 0%, 0%, 0.09),
            13.9px 14px 22.2px -2.5px hsl(0deg, 0%, 0%, 0.10);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        min-height: 100vh;
        background: var(--color-bg) url(${bg}) no-repeat fixed;
        background-size: cover;
        transition-property: color, fill, background-color;
        transition-duration: 0.2s;
    }
    
    main {
        flex: auto;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }
`;