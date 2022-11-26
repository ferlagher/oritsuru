import styled from "styled-components";
import { FlexContainer, GithubIcon, LinkedinIcon } from "../../components";
import { halftoneBkgd } from "../../utils";

const Container = styled(FlexContainer)`
    align-items: flex-end;
    gap: var(--space-sm);
    width: 100%;
    position: relative;
    padding: 0 var(--space-lg);
    overflow-y: clip;

    &::before {
        content: '';
        align-self: flex-start;
        position: absolute;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: skewY(var(--skew-deg)) translate(-50%);
        background-color: var(--color-secondary);
        border-top: var(--border) var(--color-secondary-dark);
        ${halftoneBkgd('var(--color-secondary-dark)')}
        z-index: 0;
    }
`;

const Content = styled(FlexContainer)`
    justify-content: flex-end;
    gap: var(--space-sm);
    width: 100%;
    max-width: var(--max-width);
    margin: var(--space-sm) 0;
    flex-wrap: wrap;
    z-index: 1;

    span {
        color: var(--color-background);
        width: 100%;
        text-align: end;
    }

    svg {
        fill: var(--color-background);
        height: 1.5em;
        width: 1.5em;
        transition-property: fill stroke;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }

    a:hover, a:focus-visible {
        svg {
            fill: var(--color-background-light);
            stroke: var(--color-primary);
            stroke-width: 1em;
        }
    }`;

export const Footer = () => {
    return(
        <Container>
                <Content>
                    <a href='https://github.com/ferlagher/oritsuru' target='_blank' rel="noreferrer"><GithubIcon/></a>
                    <a href='https://www.linkedin.com/in/ferlagher' target='_blank' rel="noreferrer"><LinkedinIcon/></a>
                    <span>Proyecto de Fernanda Laguna Hermida</span>
                </Content>
        </Container>
    );
};