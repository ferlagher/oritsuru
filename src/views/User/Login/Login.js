import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button, FlexContainer, Input } from "../../../components";
import { Tabs } from "./Tabs";
import { useContext, useState } from "react";
import { UserContext } from "../../../context";
import { validations } from "../../../utils";

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
`;

export const Login = () => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const [tab, setTab] = useState('login');
    const {error, authUser} = useContext(UserContext);
    
    const onSubmit = data => {
        const {name, email, pass} = data;
        authUser(tab, email, pass, name);
    };

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Tabs name='tabs' values={[['login', 'Iniciar Sesión'], ['signup', 'Registrarse']]}
                    initialValue={tab} setValue={setTab}/>
                <h2>{tab === 'login' ? 'Inicar sesión' : 'Registrarse'}</h2>
                <p>{error}</p>
                <Fieldset>
                    {tab === 'signup' && 
                        <Input label='Nombre' type='text' name='name'
                        register={register} validation={validations.name} errors={errors.name}/>
                    }
                    <Input label='E-mail' type='email' name='email'
                    register={register} validation={validations.email} errors={errors.email}/>
                    <Input label='Contraseña' type='password' name='pass'
                    register={register} validation={validations.pass} errors={errors.pass}/>
                    {tab === 'signup' && 
                        <Input label='Confirmar contraseña' type='password' name='confirmPass' 
                        register={register} validation={validations.confirmPass(watch('pass'))} errors={errors.confirmPass}/>
                    }
                    <Button type='submit'>{tab === 'login' ? 'Inicar sesión' : 'Registrarse'}</Button>
                </Fieldset>
            </Form>
        </Container>
    );
};