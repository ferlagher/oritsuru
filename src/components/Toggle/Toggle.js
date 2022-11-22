import styled from "styled-components";
import { FlexContainer } from "../base";
import { useToggle } from "./useToggle";

const Label = styled(FlexContainer).attrs({
    as: 'label',
})`
    cursor: pointer;
    
    input {
        width: 0;
        height: 0;
        opacity: 0;
    }
`;

export const Toggle = ({value = false, onToggle, children, className}) => {
    const [isCheked, handleChange] = useToggle(value, onToggle);

    return(
        <Label className={className}>
            <input type='checkbox' onChange={handleChange} checked={isCheked}/>
            {children}
        </Label>
    );
};