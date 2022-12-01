import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from './firebase';

export const getDocument = async (col, id) => {
    try {
        const snap = await getDoc(doc(db, col, id));
        const data = snap?.exists() && {id: snap.id, ...snap.data()};

        return data || {};
    } catch (err) {
        console.error(err);
    };
};

export const getDocuments = async refs => {
    try {
        const snaps = await Promise.all(refs.map(ref => getDoc(ref)));
        const data = snaps.map(snap => ({id: snap.id, ...snap.data()}))

        return data || {};
    } catch(err) {
        console.error(err)
    }
};