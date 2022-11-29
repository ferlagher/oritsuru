import styled from "styled-components";
import { FlexContainer } from "../../components";

const Container = styled(FlexContainer).attrs({
    $card: true,
})`
    flex-direction: column;
    align-items: stretch;
    padding: var(--space-lg);
    gap: var(--space-sm);
    min-width: 14rem;
    flex: 1;

    p, b {
        display: inline-flex
    }

    b {
        padding-top: var(--space-sm);
        border-top: var(--border) var(--color-background-dark);
    }

    span {
        margin-left: auto;
    }
`;

export const Summary = ({total}) => {
    return(
        <Container>
            <h2>Resumen de compra</h2>
            <p>
                Subtotal
                <span>${Math.round(total / 1.22)}</span>
            </p>
            <p>
                IVA
                <span>${Math.round(total - total / 1.22)}</span>
            </p>
            <p>
                Envío
                <span>{total > 1000 ? 'Gratis' : '$150'}</span>
            </p>
            <b>
                Total
                <span>${total > 1000 ? total : total + 150}</span>
            </b>
        </Container>
    );
};