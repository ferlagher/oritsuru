import { doc, collection, getDoc, getDocs } from 'firebase/firestore/lite';
import { db } from './firebaseConfig';

export const getItems = async (id = null) => {
    try {
        if (id) {
            const itemRef = doc(db, 'items', id);
            const itemSnap = await getDoc(itemRef);
            const item = {id: id, ...itemSnap.data()};
    
            return item;
        } else {
            const itemsRef = collection(db, 'items');
            const itemsSnapshot = await getDocs(itemsRef);
            const itemsList = itemsSnapshot.docs.map(item => ({id:item.id, ...item.data()}));
    
            return itemsList;
        }
        
    } catch (err) {
        console.error(err);
    };
};