import { useForm } from "react-hook-form";
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
        padding: 0 var(--space-lg);
    }

    p {
        padding: 0 var(--space-lg);
        font-weight: 500;
        text-align: center;
        color: var(--color-primary);
    }
`;

const Fieldset = styled(FlexContainer).attrs({
    as: 'fieldset',
})`
    flex: 1;
    flex-direction: column;
    gap: 0.2em;
    padding: var(--space-lg);
    border: none;

    label {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2em;
    }

    span {
        font-size: 0.8rem;
        color: var(--color-primary);
        height: 1em;
    }
`;

export const Login = () => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const [tab, loginError, setTab, onSubmit] = useLogin();

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Tabs name='tabs' values={[['login', 'Iniciar Sesión'], ['signup', 'Registrarse']]}
                    initialValue={tab} setValue={setTab}/>
                <h2>{tab === 'login' ? 'Inicar sesión' : 'Registrarse'}</h2>
                <p>{loginError}</p>
                <Fieldset>
                    {tab === 'signup' && 
                    <label>
                        Nombre
                        <Input type='text' 
                            {...register('name', {
                                required: 'Campo requerido.',
                            })}
                        />
                        <span>{errors.name?.message}</span>
                    </label>}
                    <label>
                        E-mail
                        <Input type='email' 
                            {...register('email', {
                                required: 'Campo requerido.',
                                pattern: {
                                    value: /\b[\w.-]+@[\w.-]+.\w{2,4}\b/,
                                    message: 'Ingrese un email válido.',
                                },
                            })}
                        />
                        <span>{errors.email?.message}</span>
                    </label>
                    <label>
                        Contraseña
                        <Input type='password'
                            {...register('pass', {
                                required: 'Campo requerido.',
                                minLength: {
                                    value: 6,
                                    message: 'Mínimo 6 caracteres.'
                                },
                            })}
                        />
                        <span>{errors.pass?.message}</span>
                    </label>
                    {tab === 'signup' && 
                    <label>
                        Confirmar contraseña
                        <Input type='password'
                            {...register('confirmPass', {
                                required: 'Campo requerido.',
                                validate: pass => {
                                    if (watch('pass') !== pass) {
                                        return 'Las contraseñas no coinciden.';
                                    }
                                },
                            })}
                        />
                        <span>{errors.confirmPass?.message}</span>
                    </label>}
                    <Button type='submit'>{tab === 'login' ? 'Inicar sesión' : 'Registrarse'}</Button>
                </Fieldset>
            </Form>
        </Container>
    );
};