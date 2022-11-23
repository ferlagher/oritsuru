import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ---Netlify---

//const URL = '/.netlify/functions/firebaseConfig';
//const initializeFirebase = async () => {
//    try {
//        const firebaseConfig = await fetch(URL).then(res => res.json());
//        initializeApp(firebaseConfig);
//    } catch (err) {
//        console.error(err);
//    };
//};

//initializeFirebase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App/>
    </>
);