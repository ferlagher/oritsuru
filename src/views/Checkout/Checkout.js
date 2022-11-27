import { useContext } from "react";
import { CartContext, UserContext } from "../../context";
import { Button, Input } from "../../components";

export const Checkout = () => {
    const {total,} = useContext(CartContext);
    const {user} = useContext(UserContext);

    return(
        <section>
            <h1>🐱‍🐉🐱‍👤🐱‍🏍🐱‍💻🐱‍👓🐱‍🚀</h1>
            <span>{total}</span>
            <label>
                Nombre
                <Input type='text' name='name' value={user.displayName} required></Input>
            </label>
            <label>
                E-mail
                <Input type='email' name='email' value={user.email} readOnly></Input>
            </label>
            <label>
                Teléfono
                <Input type='tel' name='tel' required></Input>
            </label>
            <Button onClick={() => {}}>Comprar</Button>
        </section>
    );
};