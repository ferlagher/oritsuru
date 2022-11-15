import { createGlobalStyle } from 'styled-components';
import { theme } from './themes';
import '../assets/fonts/fontFace.css'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: clamp(1rem, 3.5vw, 1.2rem);
        color: var(--color-foreground-light);
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;

        ${theme}

        --skew: skewY(-6deg);
        --space-factor: calc(0.10510423526 / 2); // tan(6deg) / 2
        --space-sm: clamp(8px, 2.5vw, 16px);
        --space-lg: clamp(16px, 3vw, 32px);
        --max-width: 1200px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        ::-webkit-scrollbar {
            width: 1rem;
            height: 1rem;

            @media (pointer: coarse) {
                display: none;
            }
            
            &-track {
                background-color: var(--color-background);
                background-image: 
                    radial-gradient(var(--color-secondary-transparent) 25%, transparent 25%),
                    radial-gradient(var(--color-secondary-transparent) 25%, transparent 25%);
                background-position: 0px 0px, 3px 3px;
                background-size: 6px 6px;
                box-shadow: inset 0.1em 0.1em 0 var(--color-secondary);
                border: 2px solid var(--color-secondary);
            }

            &-thumb {
                background-color: var(--color-primary);
                box-shadow:
                -0.1em -0.1em 0 var(--color-primary),
                inset -0.1em -0.1em 0 var(--color-secondary);
                transition: 0.2s ease-in-out;
                
                &:hover {
                    background-color: var(--color-primary-dark);
                    box-shadow: inset -0.1em 0 0 var(--color-secondary);
                }
            }
        }
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        min-height: 100vh;
        background: var(--color-background);
        transition-property: color, fill, background-color;
        transition-duration: 0.2s;
    }
    
    main {
        flex: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    h1, h2, h3, h4 {
        font-weight: 500;
    }
`;