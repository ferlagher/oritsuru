import { collection, getDocs, query } from 'firebase/firestore/lite';
import { db } from './firebase';

export const getCollection = async (col, params = null) => {
    const q = params ?
        query(collection(db, col), ...params) :
        collection(db, col);

    try {
        const snapshot = await getDocs(q);

        if(snapshot.size === 0) {
            return [];
        }

        const docs = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        
        return docs;
    } catch (err) {
        console.error(err);
    };
};