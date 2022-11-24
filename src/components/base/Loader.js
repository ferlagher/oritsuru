import styled from "styled-components";
import { loader1, loader2 } from "../../utils/keyframes";

// Loader from https://cssloaders.github.io

export const Loader = styled.span`
    width: 48px;
    height: 48px;
    display: inline-block;
    align-self: center;
    position: relative;
    transform: rotate(45deg);

    &::before {
        content: '';  
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 0;
        top: -24px;
        animation: ${loader1} 4s ease infinite;
    }

    &::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        background: rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        animation: ${loader2} 2s ease infinite;
    }
`;