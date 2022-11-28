import { useState } from "react";
import { getUser } from "../../../utils/getUser";

export const useLogin = () => {
    const [tab, setTab] = useState('login');
    const [loginError, setLoginError] = useState('');
    
    const onSubmit = data => {
        console.log("🚀 ~ file: useLogin.js ~ line 6 ~ useLogin ~ tab", tab)
        const {name, email, pass1} = data;
        getUser(tab, email, pass1, name)
            .then(err => err && setLoginError(err));
    };

    return [tab, loginError, setTab, onSubmit];
};