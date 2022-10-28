import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, Button, Svg } from "./base";

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
    background-color: #00000020;
    width: 3rem;
    text-align: center;
    border: none;
    
    &:focus {
        outline: none;
    }
`

const useItemCounter = (initialValue, maxValue) => {
    const [count, setCount] = useState(initialValue);

    const increase = e => {
        setCount(previousValue => previousValue >= maxValue ? previousValue : previousValue + 1);
    };

    const decrease = () => {
        setCount(previousValue => previousValue <= 0 ? 0 : previousValue - 1);
    };

    const handleChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue =  currentValue > maxValue ? maxValue : currentValue;

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
            <Svg viewBox="0 0 512 512">
            <rect height="64" width="384" x="64" y="224"/>
                </Svg>
            </CountBtn>
            <Input type='text' onChange={handleChange} value={count} aria-label='Cantidad'/>
            <CountBtn border onClick={increase} color={color} disabled={count === stock} aria-label='Menos'>
                <Svg viewBox="0 0 512 512">
                <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 "/>
                </Svg>
            </CountBtn>
        </FlexContainer>
    );
};