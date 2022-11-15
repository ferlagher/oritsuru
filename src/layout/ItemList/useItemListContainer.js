import { useState, useEffect } from "react";
import { getItems, group } from "../../utils";

export const useItemListContainer = () => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState({});
    
    useEffect(() => {
        const getData = async () => {
            const data = await getItems();
            const itemsByCategory = group(data, 'categoryId');
            setItems(itemsByCategory);
            setLoading(false);
        }

        getData();
    }, []);

    return [isLoading, items];
}