import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import { getCollection } from "../../utils";

export const useNavBar = () => {
    const [categories, setCategories] = useState([]);
    const itemsInCart = useContext(CartContext).cartList.length;

    useEffect(() => {
        getCollection('categories')
            .then(data => setCategories(data));
    }, [])

    return [categories, itemsInCart];
};