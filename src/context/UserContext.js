import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getDocument, getUser } from "../utils";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        onAuthStateChanged(auth, newUser => {
            setUser(newUser);
            getDocument('users', newUser?.uid)
                .then(data => setUserData(data));
        });
    }, []);
    
    const authUser = (action, email, pass, name) => {
        setIsLoading(true);
        setError('');
        getUser(action, email, pass, name)
            .then(data => setUserData(data))
            .catch(err => err && setError(err))
            .finally(() => setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUserData({}))
            .finally(() => setIsLoading(false))
    }

    const values = {
        user,
        userData,
        error,
        isLoading,
        setUserData,
        authUser,
        logout
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};