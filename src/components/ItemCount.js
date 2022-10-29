import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, Button, PlusIcon, MinusIcon } from "./base";

const CountBtn = styled(Button)`
    &:first-of-type {
        border-radius: 0.4em 0 0 0.4em;
    }

    &:last-of-type {
        border-radius: 0 0.4em 0.4em 0;
    }

    svg {
        width: 1rem;
        height: 1rem;
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

const useItemCounter = (initialValue, maxValue) => {
    const [count, setCount] = useState(initialValue);

    const increase = e => {
        setCount(previousValue => Math.min(previousValue + 1, maxValue));
    };

    const decrease = () => {
        setCount(previousValue => Math.max(previousValue - 1, 0));
    };

    const handleChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue = Math.min(currentValue, maxValue);

        setCount(newValue);
    };

    return [count, increase, decrease, handleChange];
};

export const ItemCount = ({stock, color}) => {
    const initialCount = stock ? 1 : 0;
    const [count, increase, decrease, handleChange] = useItemCounter(initialCount, stock);

    return(
        <FlexContainer align='stretch'>
            <CountBtn border onClick={decrease} color={color} disabled={count === 0} aria-label='Más'>
                <MinusIcon/>
            </CountBtn>

            <Input type='text' onChange={handleChange} value={count} disabled={stock === 0} aria-label='Cantidad'/>

            <CountBtn border onClick={increase} color={color} disabled={count === stock} aria-label='Menos'>
                <PlusIcon/>
            </CountBtn>
        </FlexContainer>
    );
};