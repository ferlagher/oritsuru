import styled from 'styled-components';
import cucumber from '../../assets/cucumber.png';
import lime from '../../assets/lime.png';

const GarnishContainer = styled.div`
    position: absolute;
    height: 70%;
    width: 100%;
    z-index: 1;

    &.hover img {
        opacity: 1;

        &:nth-of-type(1) {
            transform: rotate(22.5deg);
        }

        &:nth-of-type(2) {
            transform: rotate(0deg);
        }

        &:nth-of-type(3) {
            transform: rotate(-22.5deg);
        }

        &:nth-of-type(4) {
            transform: rotate(-45deg);
        }

        &:nth-of-type(5) {
            transform: rotate(-67.5deg);
        }

        &:nth-of-type(6) {
            transform: rotate(-90deg);
        }
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

export const Garnish = ({category, isHover}) => {
    const slice = category === 'sashimi' ? lime : cucumber;

    return(
        <GarnishContainer className={isHover ? 'hover' : ''}>
            <Slice src={slice}/>
            <Slice src={slice}/>
            <Slice src={slice}/>
            <Slice src={slice}/>
            <Slice src={slice}/>
            <Slice src={slice}/>
        </GarnishContainer>
    );
};