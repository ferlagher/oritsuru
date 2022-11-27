
import { redirect } from "react-router-dom";
import { getUser } from "../../../utils/getUser";


export const useLogin = () => {
    const onSubmit = e => {
        e.preventDefault();
        const {formType, name, email, pass1, pass2} = e.target.elements;

        if (formType.value === 'login') {
            getUser('login', email.value, pass1.value)
                .then(redirect('/'))
                .catch(err => alert(err));
            return
        };

        if (formType.value === 'signup') {
            const isPassCorrect = pass1.value === pass2.value;
            isPassCorrect && getUser('signup', email.value, pass1.value, name.value)
                .then(redirect('/'))
                .catch(err => alert(err));
            return
        };
    };

    return [onSubmit];
};