import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase';

const ERRORS = {
    'auth/user-not-found': 'El usuario no existe.',
    'auth/wrong-password': 'Contraseña errónea.',
    default: 'Hubo un error.'
}

export const getUser = async (action, email, pass, name) => {
    if (action === 'login') {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
        } catch (err) {
            console.error(err);
            return ERRORS[err.code] || ERRORS.default;
        };
    } else if (action === 'signup') {
        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            await updateProfile(auth.currentUser, {displayName: name});
        } catch (err) {
            console.error(err);
            return ERRORS[err.code] || ERRORS.default;
        };
    };
};