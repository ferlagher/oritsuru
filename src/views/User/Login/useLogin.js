import { useState } from "react";
import { getUser } from "../../../utils/getUser";

export const useLogin = () => {
    const [tab, setTab] = useState('login');
    const [loginError, setLoginError] = useState('');
    
    const onSubmit = data => {
        const {name, email, pass} = data;
        
        getUser(tab, email, pass, name)
            .then(err => err && setLoginError(err));
    };

    return [tab, loginError, setTab, onSubmit];
};