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

        ${theme}

        --skew-deg: -2deg;
        --skew-margin-factor: 0.01746038474; // tan(2deg) / 2
        
        --space-sm: clamp(6px, 2.5vw, 16px);
        --space-lg: clamp(12px, 3vw, 32px);
        
        --max-width: 1200px;

        --border: 0.15rem solid;
        --border-radius: 2px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        ::-webkit-scrollbar {
            width: 20px;
            height: 20px;

            &-track {
                background-color: var(--color-background);
                ${halftoneBkgd('var(--color-secondary-transparent)')}
                box-shadow: inset 0.1em 0.1em 0 var(--color-secondary);
                border: var(--border) var(--color-secondary);
            }

            &-thumb {
                background-color: var(--color-primary);
                border-radius: var(--border-radius);
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
    }
    
    main {
        padding: 0 var(--space-lg);
        flex: auto;
        width: 100%;
        max-width: calc(var(--max-width) + var(--space-lg) * 2);
        display: flex;
    }

    section {
        flex: auto;
        flex-basis: 80%;
        margin-top: calc(var(--skew-margin-factor) * 100vw);
        margin-bottom: var(--space-lg);
    }
    
    aside {
        flex-basis: 20%;
        padding-left: var(--space-sm);
        margin-bottom: var(--space-lg);
        
        @media (max-width: 820px) {
            display: none;
        }
    }

    a {
        text-decoration: none;
        color: currentColor;

        &:has(svg) {
            display: inline-flex;
        }
    }
`;