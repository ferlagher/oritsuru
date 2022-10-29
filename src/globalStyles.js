import nukuEot from './assets/fonts/nukunuku.eot';
import nukuWoff2 from './assets/fonts/nukunuku.woff2';
import nukuWoff from './assets/fonts/nukunuku.woff';
import nukuTtf from './assets/fonts/nukunuku.ttf';
import nukuSvg from './assets/fonts/nukunuku.svg';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Nuku Nuku';
    src: url(${nukuEot});
    src: url(${nukuEot} + '?#iefix') format('embedded-opentype'),
        url(${nukuWoff2}) format('woff2'),
        url(${nukuWoff}) format('woff'),
        url(${nukuTtf}) format('truetype'),
        url(${nukuSvg}) format('svg');
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