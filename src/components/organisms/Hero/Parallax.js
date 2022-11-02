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

const Layer = styled.img.attrs(({speed, y}) => ({
    style: {
        transform: `translateY(${(-y * speed)}px)`,
    },
}))`
    position: absolute;
    object-fit: cover;
    filter: ${({blur, saturation}) => `blur(${blur}px) saturate(${saturation})`};

    &:last-of-type {
        position: initial;
    }

    height: auto;
    width: 100%;
`;

export const Parallax = () => {
    const y = useParallax();

    return(
        <ParalaxContainer>
            <Layer y={y} blur={2} saturation={0.6} speed={0.1} src={hero5}/>
            <Layer y={y} blur={2} saturation={0.7} speed={0.13} src={hero4}/>
            <Layer y={y} blur={2} saturation={0.8} speed={0.15} src={hero3}/>
            <Layer y={y} blur={1} saturation={0.9} speed={0.20} src={hero2}/>
            <Layer y={y} blur={0} saturation={1} speed={0.27} src={hero1}/>
        </ParalaxContainer>
    )
}