import styled from "styled-components";
import { useState } from "react";
import { FlexContainer } from "../base";
import cucumberSlice from '../../assets/cucumber.png';

const showGarnish = () => {
    let styles = '';

    for (let i = 0; i <= 20; i ++) {
        styles += `&:nth-of-type(${1 + i}) {transform: rotate(${22.5 - 22.5 * i}deg)}`
    }

    return styles;
};

const Container = styled(FlexContainer)`
    position: relative;
    filter:
        drop-shadow(0.3rem 0.3rem 0 var(--color-background))
        drop-shadow(0.3rem -0.3rem 0 var(--color-background))
        drop-shadow(-0.3rem 0.3rem 0 var(--color-background))
        drop-shadow(-0.3rem -0.3rem 0 var(--color-background));
    `;

const Garnish = styled.div`
    position: absolute;
    height: 70%;
    width: 100%;
    z-index: 1;

    &.show > img {
        opacity: 1;
        ${showGarnish()}
    }
    `;

const Slice = styled.img`
    position: absolute;
    top: -50%;
    left: 50%;
    translate: -50% 0;
    height: 100%;
    width: auto;
    transform-origin: bottom center;
    transform: rotate(90deg);
    opacity: 0;
    transition-property: transform, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
`;

const Img = styled.img`
    width: ${({$size}) => $size ?? '100%'};
    height: ${({$size}) => $size ? `calc(${$size} * 0.8)` : '100%'};
    max-width: 20rem;
    max-height: 16rem;
    object-fit: contain;
    z-index: 2;
    `;

export const ItemImg = ({item, isGarnishShown, $size}) => {
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    return(
        <Container>
            <Garnish className={(isImgLoaded && isGarnishShown) ? 'show' : ''}>
                <Slice src={cucumberSlice}/>
                <Slice src={cucumberSlice}/>
                <Slice src={cucumberSlice}/>
                <Slice src={cucumberSlice}/>
                <Slice src={cucumberSlice}/>
                <Slice src={cucumberSlice}/>
            </Garnish>

            <Img src={item.image} alt={item.title} $size={$size} onLoad={() => setIsImgLoaded(true)}/>
        </Container>
    );
};