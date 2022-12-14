import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase';

const ERRORS = {
    'auth/user-not-found': 'El usuario no existe.',
    'auth/wrong-password': 'Contraseña errónea.',
    'auth/email-already-in-use': 'Ya existe un usuario asociado a ese email.',
    default: 'Hubo un error.'
}

export const getUser = async (action, email, pass, name) => {
    if (!email || !pass) {
        return;
    }

    if (action === 'login') {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
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