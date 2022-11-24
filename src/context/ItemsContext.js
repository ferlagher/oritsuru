import { createContext, useState, useEffect } from "react";
import { getCollection } from "../utils";

export const ItemsContext = createContext({
    allItems: [],
    setAllItems: () => {},
    filteredItems: [],
    setFilteredItems: () => {},
    isFiltering: false,
    setIsFiltering: () => {},
    isLoading: false,
    setIsLoading: () => {},
});

export const ItemsProvider = ({children}) => {
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    console.log("🚀 ~ file: ItemsContext.js ~ line 18 ~ ItemsProvider ~ filteredItems", filteredItems)
    const [isFiltering, setIsFiltering] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        getCollection('items')
            .then(items => {
                setAllItems(items);
                setIsLoading(false);
            });
    }, []);
    
    const values = {
        allItems, setAllItems,
        filteredItems, setFilteredItems,
        isFiltering, setIsFiltering,
        isLoading, setIsLoading,
    };

    return(
        <ItemsContext.Provider value={values}>
            {children}
        </ItemsContext.Provider>
    );
};