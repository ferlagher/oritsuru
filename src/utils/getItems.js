import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { group } from "./group";

const firebaseConfig = {
    apiKey: "AIzaSyCtxrh35EQyKvqi5PtA0EYFowThOKeoDrg",
    authDomain: "oritsuru.firebaseapp.com",
    databaseURL: "https://oritsuru-default-rtdb.firebaseio.com",
    projectId: "oritsuru",
    storageBucket: "oritsuru.appspot.com",
    messagingSenderId: "460216983173",
    appId: "1:460216983173:web:55c18e64e33951627a93ec",
    measurementId: "G-Z75L0FBCCM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getItems = async (setLoading, setItems) => {
    try {
        setLoading(true);
        const itemsCol = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map(item => ({id:item.id, ...item.data()}));

        setItems(group(itemsList, 'categoryId'));
    } catch (err) {
        console.error(err);
    } finally {
        setLoading(false);
    };
};