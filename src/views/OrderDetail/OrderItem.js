import styled from "styled-components";
import { FlexContainer } from "../../components";

const ListItem = styled(FlexContainer).attrs({
    as: 'li',
})`
    justify-content: space-between;
    width: 100%;
    gap: var(--space-sm);

    img {
        height: 4rem;
        width: 5rem;
        max-width: 20%;
        object-fit: contain;
        filter:
            drop-shadow(0.1rem 0.1rem 0 var(--color-secondary))
            drop-shadow(0.03rem -0.03rem 0 var(--color-secondary))
            drop-shadow(-0.03rem 0.03rem 0 var(--color-secondary))
            drop-shadow(-0.03rem -0.03rem 0 var(--color-secondary));
    }

    h4 {
        max-width: 50%;
    }
`;

const DetailsContainer = styled(FlexContainer)`
    flex: 1;
    max-width: 80%;
    flex-wrap: wrap;
    gap: var(--space-sm);
    justify-content: space-between;

    h4 {
        width: 38%;
    }

    span {
        width: 15%;
        text-align: center;
    }

    b {
        margin-left: auto;
    }
`;


export const OrderItem = ({item}) => {
    const {title, image, price, quantity} = item;

    return(
        <ListItem>
            <img src={image} alt={title}/>
            <DetailsContainer>
                <h4>{title}</h4>
                <span>${price}</span>
                <span>×{quantity}</span>
                <b>${price * quantity}</b>
            </DetailsContainer>
        </ListItem>
    )
};