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

export const Footer = () => {
    return(
        <FooterContainer >
                <HeartIcon light/>
                <GithubIcon light/>
                <LinkedinIcon light/>
                <CartIcon light/>
                <UserIcon light/>
        </FooterContainer>
    )
}