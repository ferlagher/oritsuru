import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from './firebase';

export const getCollection = async (col, filters = null) => {
    if (!col) {
        return [];
    }

    let q;

    if (filters) {
        const fltr = filters.map(filter => where(...filter));
        q = query(collection(db, col), ...fltr);
    } else {
        q = collection(db, col);
    };

    try {
        const snapshot = await getDocs(q);

        if(snapshot.size === 0) {
            return [];
        }

        const docs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        
        return docs;
    } catch (err) {
        console.error(err);
        return [];
    };
};