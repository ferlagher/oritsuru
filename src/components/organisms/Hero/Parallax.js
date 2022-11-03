import styled from "styled-components";
import { useParallax } from "./useParallax";

import hero1 from '../../../assets/hero1.png';
import hero2 from '../../../assets/hero2.png';
import hero3 from '../../../assets/hero3.png';
import hero4 from '../../../assets/hero4.png';
import hero5 from '../../../assets/hero5.png';

const ParalaxContainer = styled.div`
    position: relative;
    width: 50%;
    min-width: min(350px, 100%);
    flex: auto;
    `;

const Layer = styled.img.attrs(({x, y, speed}) => ({
    style: {
        transform: `translate(${-x * speed}%, ${-y * speed}%)`,
    },
}))`
    position: absolute;
    object-fit: cover;
    height: auto;
    width: 100%;

    &:nth-of-type(-n+3) {
        filter: blur(2px) saturate(0.8);
    }

    &:nth-of-type(4) {
        filter: blur(1px) saturate(0.9);
    }

    &:last-of-type {
        position: initial;
    }
`;

export const Parallax = () => {
    const [x, y] = useParallax();

    return(
        <ParalaxContainer>
            <Layer x={x} y={y} speed={0.05} src={hero5}/>
            <Layer x={x} y={y} speed={0.07} src={hero4}/>
            <Layer x={x} y={y} speed={0.11} src={hero3}/>
            <Layer x={x} y={y} speed={0.14} src={hero2}/>
            <Layer x={x} y={y} speed={0.17} src={hero1}/>
        </ParalaxContainer>
    )
}