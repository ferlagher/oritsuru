import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

exports.handler = async e => {
    const {email, pass, action} = e.queryStringParameters;
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    if (action === 'login') {
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, pass);
            const {uid} = user;
            console.log("🚀 ~ file: authentication.js ~ line 13 ~ token", uid)

            return {
                statusCode: 200,
                body: JSON.stringify({uid}),
            };
        } catch (err) {
            return {
                statusCode: 404,
                body: err.toString(),
            };
        };
    } else if (action === 'register') {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, pass);
            const uid = user;
            console.log("🚀 ~ file: authentication.js ~ line 30 ~ token", uid)
            
            return {
                statusCode: 200,
                body: JSON.stringify({uid}),
            };
        } catch (err) {
            return {
                statusCode: 404,
                body: err.toString(),
            };
        };
    } else {
        return {
            statusCode: 400,
            body: 'Invalid action',
        };

    };
};