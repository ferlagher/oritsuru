import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

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

export const db = getFirestore(app);