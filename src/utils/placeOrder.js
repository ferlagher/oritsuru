import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore/lite";
import { db } from "./firebase";

export const placeOrder = async (data, order, uid, setUserData) => {
    const date = new Date().toLocaleString('es-UY');
    const newOrder = {date, ...order}

    try {
        const orderRef = await addDoc(collection(db, 'orders'), newOrder);
        
        if (uid) {
            const userRef = doc(db, 'users', uid);
            const userData = data;
            await setDoc(userRef, userData, {merge: true});
            await updateDoc(userRef, {orders: arrayUnion(orderRef)});
            const newData = await getDoc(userRef);

            setUserData(newData.data());
        };
        
        return orderRef.id;
    } catch(err) {
        console.error(err);
    };
};