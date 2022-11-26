import styled from 'styled-components'
import { textOutline } from '../../utils/mixins';
import { FlexContainer } from '../../components';

const LogoContainer = styled(FlexContainer)`
    gap: 0.25rem;
    color: var(--color-background);
    transition: color 0.2s ease-in-out;

    :hover, :focus-visible{
        outline: none;
        color: var(--color-background-light);
    }
`;

const Isotype = styled.svg.attrs({ 
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    viewBox:"0 0 680 416",
})`
    height: 1.5em;
    width: 2.7em;
    fill: currentColor;
    stroke: var(--color-primary);
    stroke-width: 0.75em;
    filter: drop-shadow(0.1em 0.1em 0 var(--color-primary));
`;

const Logotype = styled(FlexContainer)`
    font-family: 'Nuku-Nuku', sans-serif;
    font-size: 1.5em;
    ${textOutline('var(--color-primary)', true)}
`;

export const Logo = () => {
    return(
        <LogoContainer>
            <Isotype>
            <polygon points="338.355 165.815 529.15 340.821 261.558 241.644 338.355 165.815"/>
            <polygon points="540.788 26.104 575.312 6.539 568.056 346.164 443.902 232.297 540.788 26.104"/>
            <path d="M338.8193,21.268,452.64,161.1116l-26.0063,55.3423-81.01-74.308a11.1845,11.1845,0,0,0-15.42.2834l-61.92,61.1377-32.3388-32.6651Z"/>
            <path d="M35.2815,0,252.3692,219.2814l-13.9615,13.78-54.4833-20.1929a11.1988,11.1988,0,0,0-10.1931,1.2519l-40.4763,27.66Z"/>
            <polygon points="181.563 235.846 516.381 359.931 359.095 359.931 359.069 359.931 0 359.931 181.563 235.846"/>
            <polygon points="162.383 382.291 299.944 382.291 184.788 416 162.383 382.291"/>
            <polygon points="544.533 416 407.012 382.291 560.865 382.291 544.533 416"/>
            <polygon points="596.377 67.938 597.495 15.834 680 106.977 596.377 67.938"/>
            </Isotype>
            <Logotype><span>ORITSURU</span></Logotype>
        </LogoContainer>
    );
};