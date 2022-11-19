import { createContext, useState, useEffect } from "react";
import { getItems } from "../utils";

const getData = async (setItems, setLoading) => {
    const data = await getItems();
    setItems(data);
    setLoading(false);
};

export const ItemsContext = createContext({
    items: [],
    isLoading: true,
});

export const ItemsProvider = ({children}) => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getData(setItems, setLoading);
    }, []);
    
    return(
        <ItemsContext.Provider value={{items, isLoading}}>
            {children}
        </ItemsContext.Provider>
    );
};