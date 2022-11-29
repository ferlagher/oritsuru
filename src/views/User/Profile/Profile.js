import styled from "styled-components";
import { Button, FlexContainer } from "../../../components";
import { getDocuments } from "../../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../context";
import { Link } from "react-router-dom";

const Container = styled(FlexContainer)`
    gap: var(--space-lg);
    flex-wrap: wrap;
    height: 100%;
`;

const Card = styled(FlexContainer).attrs({
    $card: true,
})`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: var(--space-lg);
    padding: var(--space-lg);

    span {
        display: inline-flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.2em;
        width: 100%;
    }

    ul {
        flex: 1;
        list-style: none;
    }

    li {
        padding: var(--space-sm) 0;
        border-bottom: var(--border) var(--color-background-dark);

        &:first-of-type {
            padding-top: 0;
        }

        &:hover {
            color: var(--color-primary);
        }
    }

    a {
        width: 100%;
        height: 100%;
    }

    button {
        align-self: flex-end;
    }
`;

export const Profile = () => {
    const {user, userData, logout} = useContext(UserContext);
    const {orders, tel, address} = userData || {};
    const {displayName, email} = user;
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        orders && getDocuments(orders)
            .then(data => setOrderList(data));
    }, [orders])

    return(
        <Container>
            <Card>
                <h2>Perfil</h2>
                <span>Nombre: <b>{displayName}</b></span>
                <span>Email: <b>{email}</b></span>
                <span>Teléfono: <b>{tel}</b></span>
                <span>Dirección: <b>{address}</b></span>
                <Button onClick={logout}>Cerrar sesión</Button>
            </Card>
            <Card>
                <h2>Mis Órdenes</h2>
                {!orderList.length ?
                <p>Todavía no has realizado ningún pedido.</p> :
                <ul>
                    {orderList.map(order => (
                        <li key={order.id}>
                            <Link to={`/order/${order.id}`}>
                                <span>{order.date}<b>${order.total}</b></span>
                            </Link>
                        </li>
                    ))}
                </ul>}
            </Card>
        </Container>
    );
};