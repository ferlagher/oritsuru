import styled from "styled-components";

const RibbonContainer = styled.div`
    position: relative;
`;

const RibbonContent = styled.span`
    position: absolute;
    top: 0.5em;
    right: -1em;
    font-weight: 700;
    font-size: 0.7em;
    text-align: center;
    min-width: 3em;
    padding: 0 1em;
    color: var(--color-rice);
    background-color: var(--color-${({color}) => color});
    border: 0.2em solid var(--color-${({color}) => color});
    border-radius: 0.4em 0 0 0.4em;
    box-shadow: var(--shadow-sm);
    
    &::before {
        content: '';
        position: absolute;
        bottom: -0.2em;
        right: -0.2em;
        border: 0.71em solid transparent;
        border-bottom-color: var(--color-${({color}) => color}-dark);
        transform-origin: bottom right;
        transform: rotate(-45deg);
    }
`;

export const Ribbon = ({text, color, children, as}) => {
    return(
        <RibbonContainer as={as}>
            {children}
            {text && <RibbonContent color={color}>{text}</RibbonContent>}
        </RibbonContainer>
    );
};