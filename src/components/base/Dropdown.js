import styled from "styled-components";


const Container = styled.div`
    position: relative;

    &:hover div {
        max-height: max-content;
        padding: var(--space-sm);
    }
`;

const Hidden = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    max-height: 0;
    overflow: hidden;
    background-color: var(--color-bg-light);
    border-radius: 0.25em;
`;

export const Dropdown = ({visible, hidden}) => {
    return(
        <Container>
            {visible}
            <Hidden>
                {hidden}
            </Hidden>
        </Container>
    );
};