import styled from "styled-components";

const BadgeContainer = styled.div`
    position: relative;
    display: inline-flex;
    height: fit-content;
    width: fit-content;
`

const Badge = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    font-weight: 700;
    font-size: 0.8rem;
    min-width: 1.5em;
    color: ${({theme}) => theme.colors.rice};
    background-color: ${({theme}) => theme.colors.tuna};
    border-radius: 10em;
    border: 0.2em solid ${({theme}) => theme.colors.tuna};
    text-align: center;
`

export default ({num, children}) => {
    return(
        <BadgeContainer>
            {children}
            {num > 0 && <Badge>{num > 99 ? '99+' : num}</Badge>}
        </BadgeContainer>
    )
}