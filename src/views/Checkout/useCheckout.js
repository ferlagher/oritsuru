import { useContext, useState } from "react";
import { CartContext, UserContext } from "../../context";
import { placeOrder } from "../../utils";

export const useCheckout = () => {
    const {cartList, total, clear} = useContext(CartContext);
    const {user, setUserData} = useContext(UserContext);
    const [orderId, setOrderId] = useState('');
    
    const payoutInputs = [
        {label: 'Nombre', type: 'text', name: 'name' , inputProps: {defaultValue: user?.displayName, readOnly: !!user}},
        {label: 'E-mail', type: 'email', name: 'email', inputProps: {defaultValue: user?.email, readOnly: !!user}},
        {label: 'Teléfono', type: 'tel', name: 'tel'},
        {label: 'Número de tarjeta', type: 'text', name: 'credit', inputProps: {placeholder: 'No ingrese datos reales.'}},
    ];

    const cardInputs = [
        {label: 'Vencimiento', type: 'text', name: 'expiration', inputProps: {size: '5'}},
        {label: 'CVV', type: 'text', name: 'cvv', inputProps: {size: '5'}},
    ]

    const onSubmit = data => {
        delete data.credit; // Just in case...
        delete data.expiration;
        delete data.cvv;
        
        data.takeAway ? delete data.address : delete data.takeAway; // Delete false or undefined values
        
        const order = {products: cartList, total, ...data};
        
        data.takeAway && delete data.takeAway; // Only needed for order

        placeOrder(data, order, user?.uid, setUserData)
            .then((id) => {
                console.log("🚀 ~ file: useCheckout.js ~ line 35 ~ .then ~ id", id)
                clear();
                setOrderId(id);
            });
    };

    return {total, payoutInputs, cardInputs, orderId, onSubmit};
};