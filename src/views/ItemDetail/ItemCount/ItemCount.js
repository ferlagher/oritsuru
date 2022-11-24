import styled from "styled-components";
import { FlexContainer, Button, PlusIcon, MinusIcon } from "../../../components";
import { useItemCount } from "./useItemCount";

const Input = styled.input`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.3em;
    color: currentColor;
    background-color: var(--color-background);
    width: 3rem;
    text-align: center;
    border: 0.1em solid var(--color-background-dark);
    box-shadow: 0 0.1em 0 var(--color-background-dark);
    
    &:focus {
        outline: none;
        background-color: var(--color-background-light);
    }

    &:disabled {
        opacity: 0.6;
    }
`;

const Span = styled.span`
    font-size: 0.9rem;
    width: fit-content;
    margin-bottom: 0.5em;
    background-color: var(--color-background);
    border-radius: 2px;
`

export const ItemCount = ({stock, inCart, onAdd}) => {
    const [count, increase, decrease, handleChange] = useItemCount(stock);

    return(
        <FlexContainer direction='column' align='stretch'>
            <Span>Disponible: {stock}</Span>
            <Span>En carrito: {inCart}</Span>
            <FlexContainer justify='space-between' gap='var(--space-sm)'>
                <FlexContainer align='stretch'>
                    <Button $border onClick={decrease} disabled={count <= 0} aria-label='Más'>
                        <MinusIcon/>
                    </Button>

                    <Input type='text' value={count} disabled={stock <= 0} onChange={handleChange}
                    onKeyDown={e => e.key === 'Enter' && onAdd(count)} aria-label='Cantidad'/>

                    <Button $border onClick={increase} disabled={count >= stock} aria-label='Menos'>
                        <PlusIcon/>
                    </Button>
                </FlexContainer>

                <Button onClick={() => onAdd(count)} disabled={count <= 0}>Agregar al carrito</Button>
            </FlexContainer>
        </FlexContainer>
    );
};