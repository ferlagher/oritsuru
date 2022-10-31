import styled from "styled-components";
import hero from '../../assets/hero.jpg' //Photo by Giovanna Gomes on Unsplash
import { FlexContainer } from "../atoms";
import { Button } from "../atoms";
import { Logo } from "../molecules/Logo";

const HeroContainer = styled(FlexContainer).attrs({
})`
    width: 100%;
    background: #666 url(${hero}) no-repeat fixed center center;
    background-size: cover;
    background-blend-mode: multiply;
    box-shadow: inset 0 0 1rem #00000080;
    padding: 6em var(--space-lg);
`;

const HeroContent = styled(FlexContainer).attrs({
})`
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
    width: 100%;
    max-width: var(--max-width);
    min-width: min(350px, 100%);
    color: var(--color-rice);

    p {
        max-width: 500px;
    }
`;

export const Hero = () => {
    return(
        <HeroContainer>
            <HeroContent>
                <Logo size='2.2rem' full/>
                <h1>Título placeholder facherito 😎</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend tristique quam, luctus condimentum nunc pulvinar eget. Suspendisse cursus ultricies hendrerit.</p>
                <FlexContainer gap='var(--space-sm)'>
                <Button color='salmon'>Menú Completo</Button>
                <Button color='avocado'>Menú Veggie</Button>
                </FlexContainer>
            </HeroContent>
        </HeroContainer>
    );
};