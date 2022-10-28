import styled from "styled-components";

const BadgeContainer = styled.div`
    position: relative;
    display: inline-flex;
    height: fit-content;
    width: fit-content;
`

const BadgeNumber = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    font-weight: 700;
    font-size: 0.8rem;
    text-align: center;
    min-width: 1.5em;
    color: ${({theme}) => theme.base.rice};
    background-color: ${({theme, color}) => theme.base[color]};
    border-radius: 10em;
    border: 0.2em solid ${({theme, color}) => theme.base[color]};
    outline: 0.15em solid currentColor;
`

export const Badge = ({num, color, children}) => {
    return(
        <BadgeContainer>
            {children}
            {num > 0 && <BadgeNumber color={color}>{num > 99 ? '99+' : num}</BadgeNumber>}
        </BadgeContainer>
    )
}