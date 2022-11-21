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

exports.handler = async () => {
    try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const itemsRef = collection(db, 'items');
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