import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const getUser = async (email, pass, action) => {
    if (action === 'login') {
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, pass);
            const {uid} = user;
            console.log("🚀 ~ file: authentication.js ~ line 13 ~ token", uid)

            return uid;
        } catch (err) {
            console.error(err);
        };
    } else if (action === 'register') {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, pass);
            const uid = user;
            console.log("🚀 ~ file: authentication.js ~ line 30 ~ token", uid)
            
            return uid;
        } catch (err) {
            console.error(err);
        };
    } else {
        return 'Invalid action';
    };
};