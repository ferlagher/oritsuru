import { getUser } from "../../utils/getUser";

export const Login = () => {
    const user = getUser('a@a.com', '123456', 'login');
    console.log("🚀 ~ file: Login.js ~ line 5 ~ Login ~ user", user)
    return(<section>🐱‍🐉</section>);
};