import styled from "styled-components";

const BadgeContainer = styled.div`
    position: relative;
    display: inline-flex;
`

const BadgeNumber = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    font-weight: 700;
    font-size: 0.8rem;
    text-align: center;
    line-height: 1em;
    min-width: 1.4em;
    color: var(--color-rice);
    background-color: var(--color-${({color}) => color});
    border-radius: 10em;
    border: 0.2em solid var(--color-${({color}) => color});
    box-shadow: var(--shadow-sm);
`

export const Badge = ({num, color, children}) => {
    return(
        <BadgeContainer>
            {children}
            {num > 0 && <BadgeNumber color={color}>{num > 99 ? '99+' : num}</BadgeNumber>}
        </BadgeContainer>
    )
}