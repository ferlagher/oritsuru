import styled from "styled-components";
import { FlexContainer, Button, PlusIcon, MinusIcon } from "../base";
import { useItemCount } from "./useItemCount";

const CountBtn = styled(Button)`
    &:first-of-type {
        border-radius: 0.4em 0 0 0.4em;
    }

    &:last-of-type {
        border-radius: 0 0.4em 0.4em 0;
    }

    svg {
        width: 1em;
        height: 1em;
    }
`

const Input = styled.input`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: currentColor;
    background-color: #00000020;
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
    font-size: 0.7em;
    margin-bottom: 0.5em;
    opacity: 0.7;
`

export const ItemCount = ({stock, color,  onAdd}) => {
    const [count, increase, decrease, handleChange] = useItemCount(stock);

    return(
        <FlexContainer direction='column' align='stretch'>
            <Span>Disponible: {stock}</Span>
            <FlexContainer justify='space-between' gap='var(--space-sm)'>
                <FlexContainer align='stretch'>
                    <CountBtn border color={color} onClick={decrease} disabled={count === 0} aria-label='Más'>
                        <MinusIcon/>
                    </CountBtn>

                    <Input type='text' onChange={handleChange} value={count} disabled={stock === 0} aria-label='Cantidad'/>

                    <CountBtn border color={color} onClick={increase} disabled={count === stock} aria-label='Menos'>
                        <PlusIcon/>
                    </CountBtn>
                </FlexContainer>

                <Button color={color} onClick={() => onAdd(count)} disabled={count === 0}>Agregar al carrito</Button>
            </FlexContainer>
        </FlexContainer>
    );
};