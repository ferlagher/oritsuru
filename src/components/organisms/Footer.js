import styled from "styled-components"
import { FlexContainer } from "../atoms"
import { CartIcon, GithubIcon, HeartIcon, LinkedinIcon, UserIcon } from '../atoms';

const Foot = styled(FlexContainer).attrs({as: 'footer'})`
    color: var(--color-rice);
    background-color: var(--color-nori);
`

export const Footer = () => {
    return(
        <Foot padding='1rem'>
                <HeartIcon light/>
                <GithubIcon light/>
                <LinkedinIcon light/>
                <CartIcon light/>
                <UserIcon light/>
        </Foot>
    )
}