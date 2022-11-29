import styled from "styled-components";

const Label = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 0.2em;
    width: 100%;
    padding: 1em 0;

    input {
        appearance: none;
        height: 1.5em;
        width: 1.5em;
        border: var(--border) var(--color-primary);
        border-radius: var(--border-radius);
        background-color: var(--color-background-light);
        position: relative;
        overflow: hidden;

        &:hover, &:focus-visible {
            outline: var(--border) var(--color-primary);
        }

        &::after {
            content: '';
            position: absolute;
            border-bottom: 0.25em solid var(--color-background-light);
            border-right: 0.25em solid var(--color-background-light);
            height: 50%;
            width: 20%;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &::before {
            content: '';
            position: absolute;
            height: 0;
            width: 0;
            border-radius: 50%;
            background-color: var(--color-primary);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: 0.2s ease-in-out;
        }

        &:checked::before {
            height: 150%;
            width: 150%;
        }
    }
`;

export const Checkbox = ({label, name, register, inputProps}) => {
    return(
        <Label>
            <input type='checkbox' {...register(name)} {...inputProps}/>
            {label}
        </Label>
    );
};