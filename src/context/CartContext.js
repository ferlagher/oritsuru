import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const storedList = JSON.parse(localStorage.getItem('cartList')) ?? [];
    const [cartList, setCartList] = useState(storedList);

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }, [cartList]);

    const addItem = (item, quantity) => {
        setCartList(prevList => {
            const newList = [...prevList];
            const i = newList.findIndex(obj => obj.id === item.id);
            const isInCart = i !== -1;

            if (isInCart) {
                newList[i].quantity += quantity;
                return newList;
            };
            
            const newItem = {quantity, ...item};
            newList.push(newItem);
            return newList;
        });
        
    };

    const removeItem = (id) => {
        setCartList(prevList => {
            const newList = [...prevList];
            const i = newList.findIndex(obj => obj.id === id);
            newList.splice(i, 1);

            return newList
        })
    };

    const clear = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    );
};

/* 

*/