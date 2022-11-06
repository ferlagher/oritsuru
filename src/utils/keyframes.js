import { keyframes } from "styled-components";

export const loader1 = keyframes`
    0% {
        box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    12% {
        box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    25% {
        box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    37% {
        box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
    }
    50% {
        box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
    }
    62% {
        box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px white, 24px 48px white, 0px 48px white;
    }
    75% {
        box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px white, 0px 48px white;
    }
    87% {
        box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px white;
    }
    100% {
        box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
`;

export const loader2 = keyframes`
    0% {
        transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    25% {
        transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    50% {
        transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    75% {
        transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
    100% {
        transform: translate(0, 0) rotateX(0) rotateY(360deg);
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;