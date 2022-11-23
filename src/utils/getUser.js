
const getUser = async (email, pass, action) => {
    const URL = `/.netlify/functions/authentication?email=${email}&pass=${pass}&acton=${action}`;
    
    try {
        const res = await fetch(URL).then(res => res.json());
        console.log("🚀 ~ file: Login.js ~ line 9 ~ getAuth ~ token", res)

        return res;
    } catch(err) {
        console.log(err);
    };
};