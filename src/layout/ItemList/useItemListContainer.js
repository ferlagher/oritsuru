import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { group } from '../../utils';
import { ItemList } from "./ItemList";

const filterByFav = (items) => {
    const favList = JSON.parse(localStorage.getItem('favs')) ?? [];
    return items.filter(item => favList.includes(item.id));
}

const filterByVeggie = (items) => {
    return items.filter(item => item.isVeggie);
}

export const useItemListContainer = (items) => {
    const {id} = useParams();
    const [list, setList] = useState([]);
    const [isFav, setIsFav] = useState(false);
    const [isVeggie, setIsVeggie] = useState(false);
    
    useEffect(() => {
        let filteredItems = [...items];
        filteredItems = isFav ? filterByFav(filteredItems) : filteredItems;
        filteredItems = isVeggie ? filterByVeggie(filteredItems) : filteredItems;

        const itemsByCategory = group(filteredItems, 'categoryId');

        const newList = id
        ? <ItemList key={id} title={id} itemList={itemsByCategory[id]}/>
        : Object.entries(itemsByCategory).map(([category, itemList]) => {
            return <ItemList key={category} title={category} itemList={itemList}/>
        });
    
        setList(newList);
    }, [id, items, isFav, isVeggie]);
    
    return {list, setIsFav, setIsVeggie};
};