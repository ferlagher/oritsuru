import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { group } from '../../utils';
import { ItemList } from "./ItemList";

export const useItemListContainer = (items) => {
    const {id} = useParams();
    const [list, setList] = useState([])
    
    const itemsByCategory = group(items, 'categoryId');
    
    useEffect(() => {
        if (id) {
            setList(<ItemList key={id} id={id} itemList={itemsByCategory[id]}/>)
        } else {
            setList(Object.entries(itemsByCategory).map(([category, itemList]) => {
                return <ItemList key={category} id={category} itemList={itemList}/>
            }));
        };
    }, [id, itemsByCategory]);
    
    return list;
}