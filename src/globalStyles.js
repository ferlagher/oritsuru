import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Nuku Nuku';
    src: url('./assets/fonts/nukunuku.eot');
    src: url('./assets/fonts/nukunuku.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/nukunuku.woff2') format('woff2'),
        url('./assets/fonts/nukunuku.woff') format('woff'),
        url('./assets/fonts/nukunuku.ttf') format('truetype'),
        url('./assets/fonts/nukunuku.svg#nuku_nukuregular') format('svg');
    font-weight: normal;
    font-style: normal;
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
        background-color: ${({theme}) => theme.base.bg};
        font-family: 'Ubuntu', sans-serif;
        font-size: clamp(1rem, 3.5vw, 1.125rem);
        color: ${({theme}) => theme.base.nori};
    }

    main {
        flex-grow: 1;
    }

    a {
        text-decoration: none;
    }
`;