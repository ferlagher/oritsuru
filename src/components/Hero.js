import styled from "styled-components";
import hero from '../assets/hero.jpg' //Photo by Giovanna Gomes on Unsplash
import { FlexContainer } from "./base";
import { Button } from "./base";
import Logo from "./Logo";

const HeroContainer = styled(FlexContainer)`
    background: #666 url(${hero}) no-repeat fixed center center;
    background-size: cover;
    background-blend-mode: multiply;
    min-height: 70vh;
    box-shadow: inset 0 0 1rem #00000080;
`;

const HeroContent = styled(FlexContainer)`
    width: 50%;
    min-width: 300px;
`;

const H1 = styled.h1`
    color: ${({theme}) => theme.colors.rice};
`;

const P = styled.p`
color: ${({theme}) => theme.colors.rice};
`;

export default () => {
    return(
        <HeroContainer padding='clamp(10px, 3vw, 32px)' justify='flex-start'>
            <HeroContent direction='column' aling='flex-start' gap='1.5rem'>
                <Logo size='clamp(1.2rem, 5vw, 3rem)' full/>
                <H1>Título placeholder facherito 😎</H1>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend tristique quam, luctus condimentum nunc pulvinar eget. Suspendisse cursus ultricies hendrerit.</P>
                <FlexContainer gap='1rem'>
                <Button color='salmon'>Menú Completo</Button>
                <Button color='avocado'>Menú Veggie</Button>
                </FlexContainer>
            </HeroContent>
        </HeroContainer>
    );
};