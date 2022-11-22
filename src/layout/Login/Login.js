import { useEffect, useState } from "react";

/* const URL = `/.netlify/functions/authentication?email=${email}&pass=${pass}&acton=${action}`; */
const URL = `/.netlify/functions/authentication?email=a@h.com&pass=1234&action=login`;

const getAuth = async () => {
    const {token} = fetch(URL).then(res => res.json());
    return token;
}

export const Login = () => {
    const [user, setUser] = useState('');
    useEffect(() => console.log(user), [user])
    return(<section></section>);
};