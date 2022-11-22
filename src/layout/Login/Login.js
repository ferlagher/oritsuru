import { useEffect, useState } from "react";

/* const URL = `/.netlify/functions/authentication?email=${email}&pass=${pass}&acton=${action}`; */
const URL = `/.netlify/functions/authentication?email=a@h.com&pass=1234&action=login`;

const getAuth = async () => {
    try {
        const {token} = fetch(URL).then(res => res.json());
        console.log("🚀 ~ file: Login.js ~ line 9 ~ getAuth ~ token", token)

        return token;
    } catch(err) {
        console.error(err);
    }
}

export const Login = () => {
    const [user, setUser] = useState('');
    setUser(setUser(getAuth()));
    useEffect(() => console.log(user), [user])
    return(<section></section>);
};