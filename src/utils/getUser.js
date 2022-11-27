import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase';

export const getUser = async (action, email, pass, name) => {
    if (action === 'login') {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
        } catch (err) {
            console.error(err);
            return err.message;
        };
    } else if (action === 'signup') {
        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            await updateProfile(auth.currentUser, {displayName: name});
        } catch (err) {
            console.error(err);
            return err.message;
        };
    };
};