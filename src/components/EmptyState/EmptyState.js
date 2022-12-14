import styled from "styled-components";
import { FlexContainer } from "../base";
import ponido from '../../assets/ponido.png';
import shopping from '../../assets/shopping.png';
import cheems from '../../assets/cheems.png';

const VIEWS = {
    filters: {title: 'Sin coincidencias', message: 'Tamtos filtros me dan amsiedad.', img: cheems},
    noItem: {title: 'El producto no existe', message: '¿Dómde está mi sumshi?', img: cheems},
    noOrder: {title: 'La órden no existe', message: '¿Seguro que pemdiste algo?', img: cheems},
    cart: {title: 'Tu carrito está vacío', message: 'Elige una categoría o vuelve al menú para seguir comprando.', img: shopping},
    dbError: {title: 'No hay datos disponibles', message: 'Yo había ponido mi base de datos aquí.', img: ponido},
    default: {title: '404 Not Found', message: 'Yo había ponido mi sitio web aquí.', img: ponido},
}

const Container = styled(FlexContainer)`
    flex-wrap: wrap;
    gap: var(--space-sm);
    height: 100%;
    justify-self: center;
    align-self: center;
    font-size: 1.2em;

    img {
        height: auto;
        width: auto;
        max-width: 100%;
        max-height: 60vh;
        object-fit: contain;
    }
`;

const TextContainer = styled(FlexContainer)`
    flex-direction: column;
    gap: var(--space-sm);
    flex: auto;
    flex-basis: 30%;
    max-width: 500px;

    h2 {
        color: var(--color-background);
        background-color: var(--color-secondary);
        border-radius: var(--border-radius);
        padding: 0.2em;
        transform: skewY(var(--skew-deg));
        margin-bottom: 0.25em;
    }

    h3 {
        max-width: 100%;
    }
`;

export const EmptyState = ({view = 'default', children}) => {
    const {title, message, img} = VIEWS[view];
    const flexDir = view === 'cart' ? 'row-reverse' : 'row';
    return(
        <Container $direction={flexDir}>
            <TextContainer>
                <h2>{title}</h2>
                <h3>{message}</h3>
                {children}
            </TextContainer>
            <img src={img} alt={title}></img>
        </Container>
    );
};