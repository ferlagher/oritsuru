import styled from "styled-components";
import { FlexContainer, Button, PlusIcon, MinusIcon } from "../base";
import { useItemCount } from "./useItemCount";

const Input = styled.input`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    color: currentColor;
    background-color: var(--color-background);
    width: 3rem;
    text-align: center;
    border: none;
    
    &:focus {
        outline: none;
    }

    &:disabled {
        opacity: 0.6;
    }
`;

const Span = styled.span`
    font-size: 0.75em;
    margin-bottom: 0.5em;
`

export const ItemCount = ({stock, color,  onAdd}) => {
    const [count, increase, decrease, handleChange] = useItemCount(stock);

    return(
        <FlexContainer direction='column' align='stretch'>
            <Span>Disponible: {stock}</Span>
            <FlexContainer justify='space-between' gap='var(--space-sm)'>
                <FlexContainer align='stretch'>
                    <Button $border $color={color} onClick={decrease} disabled={count === 0} aria-label='Más'>
                        <MinusIcon/>
                    </Button>

                    <Input type='text' onChange={handleChange} value={count} disabled={stock === 0} aria-label='Cantidad'/>

                    <Button $border $color={color} onClick={increase} disabled={count === stock} aria-label='Menos'>
                        <PlusIcon/>
                    </Button>
                </FlexContainer>

                <Button $color={color} onClick={() => onAdd(count)} disabled={count === 0}>Agregar al carrito</Button>
            </FlexContainer>
        </FlexContainer>
    );
};