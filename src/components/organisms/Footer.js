import styled from "styled-components"
import { FlexContainer } from "../atoms"
import { CartIcon, GithubIcon, HeartIcon, LinkedinIcon, UserIcon } from '../atoms';

const FooterContainer = styled(FlexContainer).attrs({
    as: 'footer',
})`
    width: 100%;
    padding: var(--space-sm);
    color: var(--color-rice);
    background-color: var(--color-nori);
`;

const FooterContent = styled(FlexContainer)`
    max-width: var(--max-width);
`;

export const Footer = () => {
    return(
        <FooterContainer>
            <FooterContent>
                    <HeartIcon light/>
                    <GithubIcon light/>
                    <LinkedinIcon light/>
                    <CartIcon light/>
                    <UserIcon light/>
            </FooterContent>
        </FooterContainer>
    )
}