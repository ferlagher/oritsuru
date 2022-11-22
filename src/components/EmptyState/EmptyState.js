import styled from "styled-components";
import { FlexContainer } from "../base";

const VIEWS = {
    itemList: {title: 'Filtros', img: '🍽'},
    itemDetail: {title: 'No existe', img: '🍣'},
    cart: {title: 'Carrito vacío', img: '🛒'},
    default: {title: '404', img: '🚧4️⃣0️⃣4️⃣🚧'},
}

const Container = styled(FlexContainer).attrs({
    as: 'section',
})`
    flex-direction: column;
    width: 100%;
`;

export const EmptyState = ({view = 'default'}) => {
    const {title, img} = VIEWS[view];

    return(
        <Container>
            <h3>{title}</h3>
            <h3>{img}</h3>
        </Container>
    );
};