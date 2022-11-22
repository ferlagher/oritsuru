import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '/firebaseConfig';

const auth = getAuth(app);

exports.handler = async e => {
    const {email, pass} = e.queryStringParameters;

    if (action === 'login') {
        try {
            const {_tokenResponse} = await signInWithEmailAndPassword(auth, email, pass);
            const token = _tokenResponse.refreshToken

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