import { createContext, useState, useEffect, useCallback } from "react";
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
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [favs, setFavs] = useState([])

    
    useEffect(() => {
        setIsLoading(true);
        setFavs(JSON.parse(localStorage.getItem('favs')) ?? [])
        Promise.all([getCollection('categories'), getCollection('items')])
            .then(([ctgys, items]) => {
                setCategories(ctgys);
                setAllItems(items);
                setIsLoading(false);
            });
    }, []);

    const getFilteredItems = useCallback(query => {
        setIsLoading(true);
        getCollection('items', query)
        .then(items => {
                setFilteredItems(items);
                setIsLoading(false)
            });
    }, []);
    
    const values = {
        allItems,
        filteredItems,
        isLoading,
        categories,
        favs,
        getFilteredItems,
        setFavs,
    };

    return(
        <ItemsContext.Provider value={values}>
            {children}
        </ItemsContext.Provider>
    );
};