import styled from "styled-components";
import { FlexContainer } from "../../../components";

const Tab = styled.label`
    font-weight: 500;
    text-align: center;
    flex: auto;
    color: var(--color-primary);
    border: var(--border) var(--color-secondary);
    border-top: none;
    padding: 0.3em;
    cursor: pointer;
    
    &:first-of-type {
        border-left: none;
        border-right: none;
    }
    
    &:last-of-type {
        border-right: none;
    }

    &:has(input:checked) {
        color: var(--color-background-light);
        background-color: var(--color-primary);
        border-bottom-color: var(--color-primary);
    }

    &:has(input:disabled) {
        opacity: 0.6;
    }

    input {
        width: 0;
        height: 0;
        opacity: 0;
    }
`;

export const Tabs = ({name, values, initialValue, setValue}) => {
    return(
        <FlexContainer $justify='stretch'>
            {values.map(([value, label]) => (
                <Tab key={value}>
                    {label}
                    <input type='radio' name={name} value={value} checked={value === initialValue} onChange={e => setValue(e.target.value)}/>
                </Tab>
            ))}
        </FlexContainer>
    );
};