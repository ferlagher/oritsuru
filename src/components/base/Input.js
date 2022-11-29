import styled from "styled-components";

const Label = styled.label`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2em;
    width: 100%;

    input {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1rem;
        width: 100%;
        color: var(--color-secondary);
        border-radius: var(--border-radius);
        border: var(--border) var(--color-primary);
        background-color: var(--color-background-light);
        padding: 0.3em;

        &:hover, &:focus-visible {
            outline: var(--border) var(--color-primary);
        }

        &:disabled, &:read-only {
            opacity: 0.6;
            pointer-events: none;
        }

        &[size] {
            width: initial;
        }
    }

    span {
        font-size: 0.8rem;
        color: var(--color-primary);
        height: 1em;
    }
`;

export const Input = ({label, type, name, register, validation, errors, inputProps}) => {
    return (
        <Label>
            {label}
            <input type={type} {...inputProps}
                {...register(name, validation)}
            />
            <span>{errors?.message}</span>
        </Label>
    );
};

export const mapInputs = (arr, register, validations, errors) => arr.map(input => (
    <Input 
    key={input.name}
    label={input.label}
    type={input.type}
    name={input.name}
    inputProps={input.inputProps}
    register={register}
    validation={validations[input.name]}
    errors={errors[input.name]}/>
));