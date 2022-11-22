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

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

exports.handler = async e => {
    const {email, pass, action} = e.queryStringParameters;

    if (action === 'login') {
        try {
            const {_tokenResponse} = await signInWithEmailAndPassword(auth, email, pass);
            const token = _tokenResponse.refreshToken
            console.log("🚀 ~ file: authentication.js ~ line 13 ~ token", token)

            return {
                statusCode: 200,
                body: JSON.stringify({ token }),
            };
        } catch (err) {
            return {
                statusCode: 404,
                body: err.toString(),
            };
        };
    };

    try {
        const {_tokenResponse} = await createUserWithEmailAndPassword(auth, email, pass);
        const token = _tokenResponse.refreshToken
        console.log("🚀 ~ file: authentication.js ~ line 30 ~ token", token)

        return {
            statusCode: 200,
            body: JSON.stringify({ token }),
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString(),
        };
    };
};