import { useId, useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, FlexContainer, Input } from "../../components";
import { Tabs } from "./Tabs";
//import { getUser } from "../../utils/getUser";

const Container = styled(FlexContainer)`
    width: 100%;
    height: 100%;
    `;

const Form = styled(FlexContainer).attrs({
    as: 'form',
    $card: true,
})`
    flex-direction: column;
    align-items: stretch;
`;

const Fieldset = styled(FlexContainer).attrs({
    as: 'fieldset',
})`
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-lg);
    border: none;

    label {
        align-self: flex-start;
        display: inline-flex;
        align-items: center;
        gap: 0.2em;
    }
`;

export const Login = () => {
    const id = useId();
    const [action, setAction] = useState('login');

    const confirmPass = (<>
        <label htmlFor={id + 'pass2'}>Confirmar contraseña</label>
        <Input type='password' id={id + 'pass2'}></Input>
    </>)

    const rememberMe = (
        <label>
            <Checkbox id={id + 'check'}/>
            Recordarme
        </label>
    )

    return(
        <section>
            <Container>
                <Form onSubmit={e => e.preventDefault()}>
                    <Tabs name='action' values={[['login', 'Iniciar Sesión'], ['signup', 'Registrarse']]}
                        initialValue={action} setValue={setAction}/>
                    <Fieldset>
                        <label htmlFor={id + 'email'}>E-mail</label>
                        <Input type='email' id={id + 'email'}></Input>
                        <label htmlFor={id + 'pass'}>Contraseña</label>
                        <Input type='password' id={id + 'pass'}></Input>
                        {action === 'login' ? rememberMe : confirmPass}
                        <Button type='submit'>{action === 'login' ? 'Inicar sesión' : 'Registrarse'}</Button>
                    </Fieldset>
                </Form>
            </Container>
        </section>
    );
};