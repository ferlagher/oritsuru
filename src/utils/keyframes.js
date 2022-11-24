import { keyframes } from "styled-components";

export const loader = keyframes`
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(50px);
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

export const scaleUp = keyframes`
    0% {
        scale: 0;
    }
    100% {
        scale: 1;
    }
`;