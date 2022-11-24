import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { documentId, where } from 'firebase/firestore/lite';
import { getCollection, group } from '../../utils';
import { ItemsContext } from '../../context';
import { ItemList } from './ItemList';
import { EmptyState, Loader } from '../../components';

export const useItemListContainer = () => {
    const {allItems, filteredItems, isFiltering, setFilteredItems, setIsFiltering, isLoading, setIsLoading, categories} = useContext(ItemsContext);
    const {id} = useParams();
    const [isFilteringVeggie, setIsFilteringVeggie] = useState(false);
    const [isFilteringFav, setIsFilteringFav] = useState(false);
    
    useEffect(() => {
        const categoryId = categories.find(ctgy => ctgy.name === id)?.id;
        const favList = JSON.parse(localStorage.getItem('favs')) ?? [];
        const params = [];

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
            setIsFiltering(true);
            getCollection('items', params)
            .then(items => {
                    setFilteredItems(items);
                }).finally(() => setIsLoading(false));
            
            return;
        };
        
        setIsFiltering(false);

    }, [id, categories, isFilteringFav, isFilteringVeggie, setFilteredItems, setIsFiltering, setIsLoading]);

    const createListsByCategory = (items) => {
        const itemsByCategory = group(items, 'categoryId');
        const filteredCategories = categories.filter(ctgy => itemsByCategory?.[ctgy.id]);
        return filteredCategories.map(({id, name, kanji}) => <ItemList key={id} title={name} kanji={kanji} itemList={itemsByCategory[id]}/>);
    }

    const renderList = () => {
        if (isLoading) {
            console.log("🚀 ~ file: useItemListContainer.js ~ line 56 ~ renderList ~ isFiltering", isFiltering)
            return <Loader message={isFiltering ? 'Filtrando...' : 'Cargando...'}/>
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