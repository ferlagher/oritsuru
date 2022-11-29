import styled from "styled-components";
import { Button, FlexContainer } from "../../../components";
import { getDocuments } from "../../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../context";

const Card = styled(FlexContainer).attrs({
    $card: true,
})`
    flex: 1;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-lg);
    padding: var(--space-lg);
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
        <FlexContainer $gap='var(--space-lg)' $wrap='wrap'>
            <Card>
                <h2>Perfil</h2>
                <p>{displayName}</p>
                <p>{email}</p>
                <p>{tel}</p>
                <p>{address}</p>
                <Button onClick={logout}>Cerrar sesión</Button>
            </Card>
            <Card>
                <h2>Mis Órdenes</h2>
                {orderList.map(order => <span key={order.id}>{order.date}</span>)}
            </Card>
        </FlexContainer>
    );
};