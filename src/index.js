import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

// ---Netlify---

const URL = '/.netlify/functions/firebaseConfig';
const initializeFirebase = async () => {
    try {
        const firebaseConfig = await fetch(URL).then(res => res.json());
        initializeApp(firebaseConfig);
    } catch (err) {
        console.error(err);
    };
};

initializeFirebase();

// ---Local---

//const firebaseConfig = {
//    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//    appId: process.env.REACT_APP_FIREBASE_APP_ID,
//    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
//};
//
//initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);