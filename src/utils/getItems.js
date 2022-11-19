import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebaseConfig';
import d0nas from '../assets/d0nas.jpg';

export const getItems = async (id = null) => {
    try {
        const itemsRef = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsRef);
        const itemsList = itemsSnapshot.docs.map(item => ({id:item.id, ...item.data()}));

        return itemsList;
    } catch (err) {
        return [{
            id: 'F',
            title: 'meperd0n as¿',
            stock: 666,
            price: 1,
            isVeggie: false,
            categoryId: 'error',
            image: d0nas,
            description:
                `Hubo un error al obtener los datos. 😿
                ${err.toString()}`,
            }];
    };
};