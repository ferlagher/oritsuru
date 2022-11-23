import styled from "styled-components";
import { FlexContainer } from "../base";
import ponido from '../../assets/ponido.png';
import shopping from '../../assets/shopping.png';
import cheems from '../../assets/cheems.png';

const VIEWS = {
    itemList: {title: 'Sin coincidencias', message: 'Tamtos filtros me dan amsiedad.', img: cheems},
    cart: {title: 'Tu carrito está vacío', message: 'Elige una categoría o vuelve al menú para seguir comprando.', img: shopping},
    default: {title: '404 Not Found', message: 'Yo había ponido mi web aquí.', img: ponido},
}

const Container = styled(FlexContainer).attrs({
    as: 'section',
})`
    flex-wrap: wrap;
    gap: var(--space-sm);
    width: 100%;
    font-size: 1.2em;

    img {
        height: 100%;
        max-width: 100%;
        max-height: 60vh;
        object-fit: contain;
    }
    
    div {

    }

    h2 {
        color: var(--color-background);
        background-color: var(--color-secondary);
        border-radius: 2px;
        padding: 0.2em;
        transform: skewY(var(--skew-deg));
        margin-bottom: 1em;
    }

    h3 {
        max-width: 100%;
    }
`;

export const EmptyState = ({view = 'default', children}) => {
    const {title, message, img} = VIEWS[view];
    const flexDir = view === 'cart' ? 'row-reverse' : 'row';
    return(
        <Container direction={flexDir}>
            <FlexContainer direction='column'>
                <h2>{title}</h2>
                <h3>{message}</h3>
                {children}
            </FlexContainer>
            <img src={img} alt={title}></img>
        </Container>
    );
};