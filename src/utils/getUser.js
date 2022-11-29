import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore/lite';
import { auth, db } from './firebase';

const ERRORS = {
    'auth/user-not-found': 'El usuario no existe.',
    'auth/wrong-password': 'Contraseña errónea.',
    'auth/email-already-in-use': 'Ya existe un usuario asociado a ese email.',
    default: 'Hubo un error.'
}

export const getUser = async (action, email, pass, name) => {
    if (action === 'login') {
        try {
            const {uid} = await signInWithEmailAndPassword(auth, email, pass);
            const userData = await getDoc(doc(db, 'users', uid));
            return userData || {};
        } catch (err) {
            console.error(err);
            throw ERRORS[err.code] || ERRORS.default;
        };
    } else if (action === 'signup') {
        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            await updateProfile(auth.currentUser, {displayName: name});
        } catch (err) {
            console.error(err);
            throw ERRORS[err.code] || ERRORS.default;
        };
    };
};