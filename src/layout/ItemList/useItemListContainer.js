import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { group } from '../../utils';
import { ItemList } from "./ItemList";
import { ItemsContext } from '../../context';

const filterByFav = (items) => {
    const favList = JSON.parse(localStorage.getItem('favs')) ?? [];
    return items.filter(item => favList.includes(item.id));
}

const filterByVeggie = (items) => {
    return items.filter(item => item.isVeggie);
}

export const useItemListContainer = () => {
    const {items, isLoading} = useContext(ItemsContext);
    const {id} = useParams();
    const [list, setList] = useState([]);
    const [isFav, setIsFav] = useState(false);
    const [isVeggie, setIsVeggie] = useState(false);
    
    useEffect(() => {
        let filteredItems = [...items];
        filteredItems = isFav ? filterByFav(filteredItems) : filteredItems;
        filteredItems = isVeggie ? filterByVeggie(filteredItems) : filteredItems;
        
        if (!filteredItems.length) {
            setList([]);
            return;
        };

        const itemsByCategory = group(filteredItems, 'categoryId');

        const newList = id ?
            [<ItemList key={id} title={id} itemList={itemsByCategory[id]}/>] :
            Object.entries(itemsByCategory).map(([category, itemList]) => {
                return <ItemList key={category} title={category} itemList={itemList}/>;
            });
    
        setList(newList);
    }, [id, items, isFav, isVeggie]);
    
    return {list, isLoading, setIsFav, setIsVeggie};
};