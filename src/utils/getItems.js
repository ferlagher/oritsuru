import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import d0nas from '../assets/d0nas.jpg';

const URL = '/.netlify/functions/firebaseConfig';

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
        const {firebaseConfig} = await fetch(URL).then((res) => res.json());
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const itemsRef = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsRef);
        const itemsList = itemsSnapshot.docs.map(item => ({id:item.id, ...item.data()}));

        return itemsList;
    } catch (err) {
        console.error(err);
        return FALLBACK_ITEM;
    };
};