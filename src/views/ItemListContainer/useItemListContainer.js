import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { documentId } from 'firebase/firestore/lite';
import { group } from '../../utils';
import { ItemsContext } from '../../context';
import { ItemList } from './ItemList';
import { EmptyState, Loader } from '../../components';

export const useItemListContainer = () => {
    const {allItems, filteredItems, isLoading, categories, favs, getFilteredItems} = useContext(ItemsContext);
    const {id} = useParams();
    const [isFilteringVeggie, setIsFilteringVeggie] = useState(false);
    const [isFilteringFav, setIsFilteringFav] = useState(false);
    const isFiltering = !!id || isFilteringFav || isFilteringVeggie;
    
    useEffect(() => {
        const categoryId = categories.find(ctgy => ctgy.name === id)?.id;
        const query = [];
        
        categoryId && query.push(['categoryId', '==', categoryId]);
        isFilteringVeggie && query.push(['isVeggie', '==', true]);
        isFilteringFav && favs.length && query.push([documentId(), 'in', favs]);
        
        console.log("🚀 ~ file: useItemListContainer.js ~ line 19 ~ useEffect ~ query", query)
        console.count()
        query.length && getFilteredItems(query);

    }, [id, categories, favs, isFilteringFav, isFilteringVeggie, getFilteredItems]);

    const createListsByCategory = (items) => {
        const itemsByCategory = group(items, 'categoryId');
        const filteredCategories = categories.filter(ctgy => itemsByCategory?.[ctgy.id]);
        return filteredCategories.map(({id, name, kanji}) => <ItemList key={id} title={name} kanji={kanji} itemList={itemsByCategory[id]}/>);
    }

    const renderList = () => {
        if (isLoading) {
            return <Loader message={isFiltering ? 'Filtrando...' : 'Cargando...'}/>
        };

        if (!allItems.length) {
            return <EmptyState view='dbError'/>;
        }

        if (isFilteringFav && !favs.length) {
            return <EmptyState view='filters'/>;
        };

        if (isFiltering && !filteredItems.length) {
            return <EmptyState view='filters'/>;
        };

        if (isFiltering && filteredItems.length) {
            return createListsByCategory(filteredItems);
        };

        if (!isFiltering) {
            return createListsByCategory(allItems);
        };
        
        return <EmptyState/>;
    }

    return {renderList, isLoading, setIsFilteringFav, setIsFilteringVeggie};
};