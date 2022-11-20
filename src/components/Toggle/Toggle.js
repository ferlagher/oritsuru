import styled from "styled-components";
import { useToggle } from "./useToggle";

const Label = styled.label`
    z-index: 2;
    
    svg {
        fill: transparent;
        stroke: var(--color-secondary);
        stroke-width: 40px;
    }
`;

const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`
    width: 0;
    height: 0;
    opacity: 0;

    &:checked + svg {
        fill: var(--color-primary);
    }
`;

export const Toggle = ({value = false, onToggle, children}) => {
    const [isCheked, handleChange] = useToggle(value, onToggle);

    return(
        <Label>
            <Checkbox onChange={handleChange} checked={isCheked}/>
            {children}
        </Label>
    );
};