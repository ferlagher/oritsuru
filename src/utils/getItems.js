import d0nas from '../assets/d0nas.jpg';

const URL = '/.netlify/functions/firebase';

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
        return {itemsList} = await fetch(URL).then((res) => res.json());
    } catch (err) {
        console.error(err);
        return FALLBACK_ITEM;
    };
};