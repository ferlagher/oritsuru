import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { Button } from "../../../components";

export const Profile = ({user}) => {
    const displayName = user.displayName;
    const email = user.email;
    return(
        <div>
            <p>🐱‍🐉</p>
            <p>{displayName}</p>
            <p>{email}</p>
            <Button onClick={() => signOut(auth)}/>
        </div>
    );
};