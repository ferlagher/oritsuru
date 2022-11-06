import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button, FlexContainer, Logo } from "../../components";
import { Parallax } from "./Parallax";

const HeroContainer = styled(FlexContainer)`
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    max-width: var(--max-width);
    overflow: hidden;
    padding-top: 5rem; // Makes extra space under the navbar
    margin-top: -5rem; // for the parallax effect
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
                <Button as={Link} to='/menu' color='salmon'>Menú Completo</Button>
                <Button as={Link} to='/menu' color='avocado'>Menú Veggie</Button>
                </FlexContainer>
            </HeroContent>
            <Parallax/>
        </HeroContainer>
    );
};