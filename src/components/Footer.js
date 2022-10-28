import styled from "styled-components"
import { FlexContainer } from "./base"
import { CartIcon, GithubIcon, HeartIcon, LinkedinIcon, UserIcon } from './base';

const Foot = styled(FlexContainer).attrs({as: 'footer'})`
    color: ${({theme}) => theme.base.rice};
    background-color: ${({theme}) => theme.base.nori};
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