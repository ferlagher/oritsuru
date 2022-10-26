import styled from "styled-components"
import { FlexContainer } from "./base"

const Footer = styled(FlexContainer).attrs({as: 'footer'})`
    color: ${({theme}) => theme.colors.rice};
    background-color: ${({theme}) => theme.colors.nori};
`

export default () => {
    return(
        <Footer padding='1em'>
            Footer
        </Footer>
    )
}