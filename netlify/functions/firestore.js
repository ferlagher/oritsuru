import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from '/firebaseConfig';

const db = getFirestore(app);
const itemsRef = collection(db, 'items');

exports.handler = async () => {
    try {
        const itemsSnapshot = await getDocs(itemsRef);
        const itemsList = itemsSnapshot.docs.map(item => ({id:item.id, ...item.data()}));
        
        return {
            statusCode: 200,
            body: JSON.stringify({itemsList}),
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString(),
        };
    };
};