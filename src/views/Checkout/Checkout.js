import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import { Button, Checkbox, FlexContainer, Input, Loader, mapInputs } from "../../components";
import styled from "styled-components";
import { validations } from "../../utils";
import { useCheckout } from "./useCheckout";
import { Summary } from "./Summary";

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
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const {total, payoutInputs, cardInputs, orderId, isLoading, onSubmit} = useCheckout();

    return(
        <section>{
        isLoading ?
        <Loader message='Procesando orden...'/> :
        orderId ? 
        <Navigate to={`/order/${orderId}`}/> :
            <FlexContainer as='form' onSubmit={handleSubmit(onSubmit)} $gap='var(--space-lg)' $wrap='wrap'>
                <Wrapper>
                    <Summary total={total} takeAway={watch('takeAway')}/>
                    <FormContainer>
                        <h2>Entrega</h2>
                        <Checkbox label='Retiro en local' name='takeAway' register={register}/>
                        <Input
                            label='Dirección de envío'
                            type='text'
                            name='address' 
                            register={register}
                            validation={validations.address(watch('takeAway'))}
                            errors={errors.address}
                        />
                    </FormContainer>
                </Wrapper>
                <FormContainer>
                    <h2>Método de pago</h2>
                    {mapInputs(payoutInputs, register, validations, errors)}
                    <FlexContainer $gap='var(--space-sm)'>
                        {mapInputs(cardInputs, register, validations, errors)}
                    </FlexContainer>
                    <Button type='submit' disabled={!total}>Finalizar compra</Button>
                </FormContainer>
            </FlexContainer>
        }</section>
    );
};