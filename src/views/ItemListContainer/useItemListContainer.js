import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { documentId, where } from 'firebase/firestore/lite';
import { getCollection, group } from '../../utils';
import { ItemsContext } from '../../context';
import { ItemList } from './ItemList';
import { EmptyState, Loader } from '../../components';

export const useItemListContainer = () => {
    const {allItems, filteredItems, isFiltering, setFilteredItems, setIsFiltering, isLoading, setIsLoading} = useContext(ItemsContext);
    const {categoryId} = useParams();
    const [isFilteringVeggie, setIsFilteringVeggie] = useState(false);
    const [isFilteringFav, setIsFilteringFav] = useState(false);
    
    useEffect(() => {
        const params = [];
        const favList = JSON.parse(localStorage.getItem('favs')) ?? [];
        categoryId && params.push(where('categoryId', '==', categoryId));
        isFilteringFav && params.push(where(documentId(), 'in', favList));
        isFilteringVeggie && params.push(where('isVeggie', '==', true));

        if (isFilteringFav && !favList.length) {
            setFilteredItems([]);
            setIsLoading(false);
            setIsFiltering(true);

            return;
        };
        
        if (params.length) {
            setIsLoading(true);
            getCollection('items', params)
                .then(items => {
                    setFilteredItems(items);
                    setIsFiltering(true);
                }).finally(() => setIsLoading(false));
            
            return;
        };
        
        setIsFiltering(false);

    }, [categoryId, isFilteringFav, isFilteringVeggie, setFilteredItems, setIsFiltering, setIsLoading]);

    const createListsByCategory = (items) => {
        const itemsByCategory = Object.entries(group(items, 'categoryId')); // [[ctgy1, [list1]], [ctgy2, [list2]], etc.]
        return itemsByCategory.map(([category, itemList]) => <ItemList key={category} title={category} itemList={itemList}/>);
    }

    const renderList = () => {
        if (isLoading) {
            return <Loader/>
        };

        if (isFiltering && !filteredItems.length) {
            return <EmptyState view='filters'/>;
        };

        if (isFiltering && filteredItems.length) {
            return createListsByCategory(filteredItems);
        };

        if (!isFiltering && allItems.length) {
            return createListsByCategory(allItems);
        };
        
        return <EmptyState/>;
    }

    return {renderList, isLoading, setIsFilteringFav, setIsFilteringVeggie};
};