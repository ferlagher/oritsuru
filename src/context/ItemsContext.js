import { createContext, useState, useEffect } from "react";
import { getCollection } from "../utils";

const getData = async (setItems, setIsLoading) => {
    const data = await getCollection('items');
    setItems(data);
    setIsLoading(false);
};

export const ItemsContext = createContext({
    items: [],
    isLoading: true,
});

export const ItemsProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getData(setItems, setIsLoading);
    }, []);
    
    return(
        <ItemsContext.Provider value={{items, isLoading}}>
            {children}
        </ItemsContext.Provider>
    );
};