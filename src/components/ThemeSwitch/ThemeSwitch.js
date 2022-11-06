import styled from "styled-components";
import { MoonIcon, SunIcon } from "../";

const SwitchContainer = styled.label`
    position: relative;
    display: inline-flex;
    width: 2.4rem;
    height: 1.4rem;
    border: 2px solid currentColor;
    border-radius: 10rem;
    padding: 2px;
    margin: 0.25em;
    cursor: pointer;

    svg {
        position: absolute;
        top: 0;
        margin: 2px;
        width: calc(1.4rem - 8px);
        height: calc(1.4rem - 8px);
        opacity: 0.5;
        
        &:first-of-type {
            left: 0;
        }

        &:last-of-type {
            right: 0;
        }
    }
`;

const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`
    position: absolute;
    width: 0;
    opacity: 0;

    &:checked + span {
        margin-left: 1rem;
    }
`;

const Slider = styled.span`
    width: calc(1.4rem - 8px);
    height: calc(1.4rem - 8px);
    background-color: currentColor;
    border-radius: 50%;
    transition: margin 0.2s ease-in-out;
    z-index: 1;
`;


export const ThemeSwitch = ({handler, check}) => {
    return(
        <SwitchContainer>
            <MoonIcon/>
            <SunIcon/>
            <Checkbox onChange={handler} checked={check}/>
            <Slider/>
        </SwitchContainer>
    );
};