import { useContext } from "react";
import { Loader } from "../../components";
import { UserContext } from "../../context";
import { Login } from "./Login/Login";
import { Profile } from "./Profile/Profile";

export const User = () => {
    const {user, isLoading} = useContext(UserContext);

    return(
        <section>{
            isLoading ?
            <Loader/> :
            user ?
            <Profile/> :
            <Login/>
        }</section>
    );
};