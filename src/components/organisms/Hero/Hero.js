import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button, FlexContainer } from "../../atoms";
import { Logo } from "../../molecules";
import { Parallax } from "./Parallax";

const HeroContainer = styled(FlexContainer).attrs({
})`
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    width: 100%;
    max-width: var(--max-width);
    flex: auto;
    `;

const HeroContent = styled(FlexContainer).attrs({
})`
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
    width: 50%;
    min-width: min(350px, 100%);
    padding: var(--space-lg);
    flex: auto;
    z-index: 2;

    p {
        max-width: 500px;
    }
`;

export const Hero = () => {
    return(
        <HeroContainer>
            <HeroContent>
                <Logo size='2.2rem' full/>
                <h1>Título facherito 😎</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend tristique quam, luctus condimentum nunc pulvinar eget. Suspendisse cursus ultricies hendrerit.</p>
                <FlexContainer gap='var(--space-sm)'>
                <Button as={Link} to='/itemlist' color='salmon'>Menú Completo</Button>
                <Button as={Link} to='/itemlist' color='avocado'>Menú Veggie</Button>
                </FlexContainer>
            </HeroContent>
            <Parallax/>
        </HeroContainer>
    );
};