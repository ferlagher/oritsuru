import styled from "styled-components";

export const Badge = styled.span`
    font-weight: 500;
    font-size: 0.8rem;
    text-align: center;
    color: var(--color-background-light);
    background-color: var(--color-accent);
    border-radius: var(--border-radius);
    border: var(--border) var(--color-accent);
    transform: skewY(var(--skew-deg));
`;