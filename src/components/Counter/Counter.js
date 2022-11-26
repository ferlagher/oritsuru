import styled from "styled-components";
import { FlexContainer, Button, PlusIcon, MinusIcon } from "..";
import { useCounter } from "./useCounter";

const Input = styled.input`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.3em;
    color: currentColor;
    background-color: var(--color-background);
    width: 3rem;
    text-align: center;
    border: var(--border) var(--color-background-dark);
    box-shadow: 0 0.1em 0 var(--color-background-dark);
    
    &:focus {
        outline: none;
        background-color: var(--color-background-light);
    }

    &:disabled {
        opacity: 0.6;
    }
`;

export const Counter = ({initial = 0, max, onCount}) => {
    const [count, increase, decrease, onChange] = useCounter(initial, max, onCount);

    return(
        <FlexContainer $align='stretch'>
            <Button $border onClick={decrease} disabled={count <= 0} aria-label='Más'>
                <MinusIcon/>
            </Button>
            <Input type='text' value={count} disabled={max <= 0} onChange={onChange} aria-label='Cantidad'/>
            <Button $border onClick={increase} disabled={count >= max} aria-label='Menos'>
                <PlusIcon/>
            </Button>
        </FlexContainer>
    );
};