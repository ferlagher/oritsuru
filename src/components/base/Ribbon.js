import styled from "styled-components";

const RibbonContainer = styled.div`
    position: relative;
    display: inline-flex;
    height: fit-content;
    width: fit-content;
`

const RibbonContent = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    translate: 1em 1.5em;
    font-weight: 700;
    font-size: 0.8rem;
    text-align: center;
    min-width: 3em;
    padding: 0 1em;
    color: var(--color-rice);
    background-color: var(--color-${({color}) => color});
    border: 0.2em solid var(--color-${({color}) => color});
    border-radius: 0.4em 0 0 0.4em;
    box-shadow: -0.2em 0.2em #00000020;

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
`

export const Ribbon = ({text, color, children}) => {
    return(
        <RibbonContainer>
            {children}
            {text && <RibbonContent color={color}>{text}</RibbonContent>}
        </RibbonContainer>
    )
}