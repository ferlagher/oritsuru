import { createGlobalStyle } from 'styled-components';
import { theme } from './themes';
import '../assets/fonts/fontFace.css'
import { halftoneBkgd } from '../utils/mixins';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: clamp(1rem, 3.5vw, 1.2rem);
        color: var(--color-secondary);
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;

        ${theme}

        --skew-deg: -2deg;
        --space-factor: 0.01746038474; // tan(2deg) / 2
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
                ${halftoneBkgd('var(--color-secondary-transparent)')}
                box-shadow: inset 0.1em 0.1em 0 var(--color-secondary);
                border: 2px solid var(--color-secondary);
            }

            &-thumb {
                background-color: var(--color-primary);
                border-radius: 2px;
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
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: var(--color-background);
        padding: 0 var(--space-lg);
    }
    
    main {
        flex: auto;
        width: 100%;
        max-width: var(--max-width);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: currentColor;

        &:has(svg) {
            display: inline-flex;
        }
    }
`;