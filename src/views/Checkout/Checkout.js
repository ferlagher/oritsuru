import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CartContext, UserContext } from "../../context";
import { Button, Checkbox, FlexContainer, Input } from "../../components";
import styled from "styled-components";
import { db } from "../../utils/firebase";
import { addDoc, collection } from "firebase/firestore/lite";

const Summary = styled(FlexContainer).attrs({
    $card: true,
})`
    flex-direction: column;
    align-items: stretch;
    padding: var(--space-lg);
    gap: var(--space-sm);
    min-width: 14rem;
    flex: 1;

    p, b {
        display: inline-flex
    }

    b {
        padding-top: var(--space-sm);
        border-top: var(--border) var(--color-background-dark);
    }

    span {
        margin-left: auto;
    }
`;

const FormContainer = styled(FlexContainer).attrs({
    $card: true,
})`
    padding: var(--space-lg);
    gap: 0.2em;
    flex-direction: column;
    align-items: flex-start;
    min-width: 14rem;
    flex: 1;
    margin-bottom: calc(var(--skew-margin-factor) * 100%);
    
    label {
        width: 100%;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2em;

        &:has([type='checkbox']) {
            flex-direction: row;
            padding: 1em 0;
        }
    }

    span {
        font-size: 0.8rem;
        color: var(--color-primary);
        height: 1em;
    }

    button {
        align-self: flex-end;
    }
`;

const Wrapper = styled(FlexContainer)`
    flex: 1;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-lg);
    margin-top: calc(var(--skew-margin-factor) * 100%);
`;

export const Checkout = () => {
    const {cartList, total} = useContext(CartContext);
    const {user} = useContext(UserContext);
    const formConfig = {defaultValues: {name: user?.displayName, email: user?.email}};
    const {register, handleSubmit, watch, formState: { errors }} = useForm(formConfig);
    const onSubmit = (data) => {
        delete data.credit;
        delete data.expiration;
        delete data.cvv;
        data.takeAway ? delete data.address : delete data.takeAway;

        const date = new Date().toLocaleString('es-UY');
        const order = {products: cartList, total, date, ...data};

        addDoc(collection(db, 'orders'), order)
            .then(({id}) => console.log(id))
            .catch(err => console.log(err));
    };

    return(
        <section>
            <FlexContainer as='form' onSubmit={handleSubmit(onSubmit)} $gap='var(--space-lg)' $wrap='wrap'>
                <Wrapper>
                    <Summary>
                        <h2>Resumen de compra</h2>
                        <p>
                            Subtotal
                            <span>${Math.round(total / 1.22)}</span>
                        </p>
                        <p>
                            IVA
                            <span>${Math.round(total - total / 1.22)}</span>
                        </p>
                        <p>
                            Envío
                            <span>{total > 1000 ? 'Gratis' : '$150'}</span>
                        </p>
                        <b>
                            Total
                            <span>${total > 1000 ? total : total + 150}</span>
                        </b>
                    </Summary>
                    <FormContainer>
                        <h2>Entrega</h2>
                        <label>
                            <Checkbox name='takeAway' {...register('takeAway')}/>
                            Retiro en local
                        </label>
                        <label>
                            Dirección 
                            <Input type='text'
                                {...register('address', {
                                    required: 'Ingrese la dirección de envío',
                                    disabled: watch('takeAway'),
                                })}
                            />
                            <span>{errors.address?.message}</span>
                        </label>
                    </FormContainer>
                </Wrapper>
                <FormContainer>
                    <h2>Método de pago</h2>
                    <label>
                        Nombre
                        <Input type='text' readOnly={!!user}
                            {...register('name', {
                                required: 'Campo requerido.',
                            })}
                        />
                        <span>{errors.name?.message}</span>
                    </label>
                    <label>
                        E-mail
                        <Input type='email'  readOnly={!!user}
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
                        Teléfono
                        <Input type='tel' 
                            {...register('tel', {
                                required: 'Campo requerido.',
                                pattern: {
                                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                    message: 'Ingrese un teléfono válido.',
                                },
                            })}
                        />
                        <span>{errors.tel?.message}</span>
                    </label>
                    <label>
                        Número de tarjeta
                        <Input type='text' 
                            {...register('credit', {
                                required: 'Campo requerido.',
                                pattern: {
                                    value: /^(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}$/,
                                    message: 'Ingrese un número de tarjeta válido.',
                                },
                            })}
                        />
                        <span>{errors.credit?.message}</span>
                    </label>
                    <FlexContainer $gap='var(--space-sm)'>
                        <label>
                            Vencimiento
                            <Input type='text' size="5"
                                {...register('expiration', {
                                    required: true,
                                    pattern: /^(0[1-9]|1[012])[ -/]\d\d$/,
                                })}
                            />
                        </label>
                        <label>
                            CVV
                            <Input type='text' size="3"
                                {...register('cvv', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 3,
                                })}
                            />
                        </label>
                    </FlexContainer>
                    <Button type='submit'>Finalizar compra</Button>
                </FormContainer>
            </FlexContainer>
        </section>
    );
};