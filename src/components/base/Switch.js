import { useState } from "react";
import styled from "styled-components";

const SwitchContainer = styled.label`
    position: relative;
    display: flex;
    width: 2rem;
    height: 1.2rem;
    border: 2px solid currentColor;
    border-radius: 10rem;
    padding: 2px;
    cursor: pointer;
`;

const Checkbox = styled.input.attrs({type: 'checkbox'})`
    position: absolute;
    width: 0;
    opacity: 0;

    &:checked + span {
        margin-left: calc(0.8rem);
    }
`;

const Slider = styled.span`
    width: calc(1.2rem - 8px);
    height: calc(1.2rem - 8px);
    background-color: currentColor;
    border-radius: 50%;
    transition: margin 0.2s ease-in-out;
`;

export const Switch = ({handler, checked = false}) => {
    const [check, setCheck] = useState(checked);
    const handleChange = () => {
        setCheck(isChecked => !isChecked);
        handler();
    };

    return(
        <SwitchContainer>
            <Checkbox onChange={handleChange} checked={check}/>
            <Slider/>
        </SwitchContainer>
    );
};