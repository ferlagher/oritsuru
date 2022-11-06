import { useState, useEffect } from "react";
import { getItems } from "../utils/getItems";
import { CategoriesList, ItemListContainer, Footer } from "../layout";

export const Menu = () => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState({});

    useEffect(() => {
        getItems(setLoading, setItems);
    }, []);

    return(<>        
        <main>
            <CategoriesList categories={Object.keys(items)}/>
            <ItemListContainer isLoading={isLoading} items={items}/>
        </main>
        <Footer/>
    </>)
};