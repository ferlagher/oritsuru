import { createContext, useCallback, useEffect, useState } from "react";

const calcTotal = (arr) => arr.reduce((sum, item) => sum + item.price * item.quantity, 0)

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const storedList = JSON.parse(localStorage.getItem('cartList')) ?? [];
    const [cartList, setCartList] = useState(storedList);
    const [total, setTotal] = useState(calcTotal(cartList));

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
        setTotal(calcTotal(cartList));
    }, [cartList]);

    const addItem = useCallback((item, quantity) => {
        setCartList(prevList => {
            const newList = [...prevList];
            const i = newList.findIndex(obj => obj.id === item.id);

            if (i !== -1) {
                newList[i].quantity = quantity;
                return newList;
            };
            
            const newItem = {quantity, ...item};
            newList.push(newItem);
            return newList;
        });
        
    }, []);

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

    const values = {
        cartList,
        total,
        addItem,
        removeItem,
        clear
    }

    return (
        <CartContext.Provider value={values}>
            { children }
        </CartContext.Provider>
    );
};

/* 

*/