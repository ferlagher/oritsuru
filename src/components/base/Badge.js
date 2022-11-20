import styled from "styled-components";

const BadgeContainer = styled.div`
    position: relative;
    display: inline-flex;
    `;

const BadgeNumber = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    font-weight: 500;
    font-size: 0.8rem;
    text-align: center;
    min-width: 1.2em;
    color: var(--color-background-light);
    background-color: var(--color-primary);
    border-radius: 2px;
    border: 0.1em solid var(--color-primary);
    box-shadow: var(--shadow-sm);
    transform: skewY(var(--skew-deg));
`

export const Badge = ({num, children}) => {
    return(
        <BadgeContainer>
            {children}
            {num > 0 && <BadgeNumber>{num > 99 ? '99+' : num}</BadgeNumber>}
        </BadgeContainer>
    );
};