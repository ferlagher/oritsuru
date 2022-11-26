import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: inline-flex;

    span {
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
    border-radius: var(--border-radius);
    border: var(--border) var(--color-primary);
    transform: skewY(var(--skew-deg));
    }
`;

export const Notification = ({num, children}) => {
    return(
        <Container>
            {children}
            {num > 0 && <span>{num > 99 ? '99+' : num}</span>}
        </Container>
    );
};