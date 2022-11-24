import { useEffect, useState } from "react";
import { getCollection } from "../utils";

const getData = async (setCategories, setIsLoading) => {
    const data = await getCollection('categories');
    setCategories(data);
    setIsLoading(false);
};

export const useNavBar = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const itemsInCart = useContext(CartContext).cartList.length;

    useEffect(() => {
        getData(setCategories, setIsLoading);
    }, [])

    return [categories, isLoading, itemsInCart];
};