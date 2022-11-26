import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, Button, Counter } from "../../../components";

const Span = styled.span`
    font-size: 0.9rem;
    width: fit-content;
    margin-bottom: 0.5em;
    background-color: var(--color-background);
    border-radius: var(--border-radius);
`

export const ItemCount = ({stock, inCart, onAdd}) => {
    const [quantity, setQuantity] = useState(inCart);

    return(
        <FlexContainer $direction='column' $align='stretch'>
            <Span>Disponible: {stock}</Span>
            <Span>En carrito: {inCart}</Span>
            <FlexContainer $justify='space-between' $gap='var(--space-sm)'>
                <Counter initial={inCart} max={stock} onCount={setQuantity}/>
                <Button onClick={() => onAdd(quantity)} disabled={quantity <= 0}>Agregar al carrito</Button>
            </FlexContainer>
        </FlexContainer>
    );
};