import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Nuku Nuku';
        src: url('NukuNuku.eot');
        src: url('NukuNuku.eot?#iefix') format('embedded-opentype'),
            url('NukuNuku.woff2') format('woff2'),
            url('NukuNuku.woff') format('woff'),
            url('NukuNuku.ttf') format('truetype'),
            url('NukuNuku.svg#NukuNuku') format('svg');
        font-display: swap;
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