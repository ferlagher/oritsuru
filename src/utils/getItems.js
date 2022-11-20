import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebaseConfig';
import d0nas from '../assets/d0nas.jpg';

const FALLBACK_ITEM = [{
    id: 'F',
    title: 'meperd0n as¿',
    stock: 666,
    price: 1,
    isVeggie: false,
    categoryId: 'error',
    image: d0nas,
    description:
        'Hubo un error al obtener los datos. 😿'
    }]

export const getItems = async () => {
    try {
        const itemsRef = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsRef);
        const itemsList = itemsSnapshot.docs.map(item => ({id:item.id, ...item.data()}));

        return itemsList;
    } catch (err) {
        console.error(err);
        return FALLBACK_ITEM;
    };
};