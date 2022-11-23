import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import d0nas from '../assets/d0nas.jpg';

const FALLBACK_ITEM = [{
    id: 'F',
    title: 'meperd0n as¿',
    stock: 666,
    price: 1,
    isVeggie: false,
    categoryId: 'error',
    image: d0nas,
    description:'Hubo un error al obtener los datos. 😿',
    }]

export const getCollection = async (col) => {
    try {
        const db = getFirestore();
        const itemsRef = collection(db, col);
        const itemsSnapshot = await getDocs(itemsRef);
        const itemsList = itemsSnapshot.docs.map(item => ({id:item.id, ...item.data()}));
        
        return itemsList;
    } catch (err) {
        console.error(err);

        return FALLBACK_ITEM;
    };
};