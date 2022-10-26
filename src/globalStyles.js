import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Nuku Nuku';
    font-style: normal;
    font-weight: normal;
    src: url('./assets/fonts/nuku.woff') format('font-woff');
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
        background-color: ${({theme}) => theme.colors.rice};
        font-family: 'Ubuntu', sans-serif;
        font-size: clamp(1rem, 3.5vw, 1.125rem);
        color: ${({theme}) => theme.colors.nori};
    }

    main {
        flex-grow: 1;
    }
`;