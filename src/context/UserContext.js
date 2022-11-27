import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, newUser => {
            setUser(newUser);
            setIsLoading(false);
        });
    }, []);

    return (
        <UserContext.Provider value={{user, isLoading}}>
            {children}
        </UserContext.Provider>
    );
};