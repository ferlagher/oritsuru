import { useState } from "react";
import styled from "styled-components";
import { Button, FlexContainer, Input } from "../../../components";
import { Tabs } from "./Tabs";
import { useLogin } from "./useLogin";

const Container = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    `;

const Form = styled(FlexContainer).attrs({
    as: 'form',
    $card: true,
})`
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: min(20rem, 100%);

    h2 {
        text-align: center;
        margin-top: var(--space-lg);
    }
`;

const Fieldset = styled(FlexContainer).attrs({
    as: 'fieldset',
})`
    flex: 1;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-lg);
    border: none;

    label {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2em;
    }
`;

export const Login = () => {
    const [form, setForm] = useState('login');
    const [onSubmit] = useLogin();

    return(
        <Container>
            <Form onSubmit={onSubmit}>
                <Tabs name='formType' values={[['login', 'Iniciar Sesión'], ['signup', 'Registrarse']]}
                    initialValue={form} setValue={setForm}/>
                    <h2>{form === 'login' ? 'Inicar sesión' : 'Registrarse'}</h2>
                <Fieldset>
                    {form === 'signup' && 
                    <label>
                        Nombre
                        <Input type='text' name='name' required></Input>
                    </label>}
                    <label>
                        E-mail
                        <Input type='email' name='email' required></Input>
                    </label>
                    <label>
                        Contraseña
                        <Input type='password' name='pass1' required></Input>
                    </label>
                    {form === 'signup' && 
                    <label>
                        Confirmar contraseña
                        <Input type='password' name='pass2' required></Input>
                    </label>}
                    <Button as='button' type='submit'>{form === 'login' ? 'Inicar sesión' : 'Registrarse'}</Button>
                </Fieldset>
            </Form>
        </Container>
    );
};