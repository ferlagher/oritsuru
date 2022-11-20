import { useContext } from "react";
import { useEffect, useState } from "react";
import { ItemsContext } from "../../context";

export const useNavBar = () => {
    const {items} = useContext(ItemsContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(items.reduce((ctgy, obj) => {
            !ctgy.includes(obj.categoryId) && ctgy.push(obj.categoryId);
            
            return ctgy;
        }, []));
    }, [items])

    return categories;
};
