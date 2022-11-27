import { useCallback, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context";
import { Button, Counter, FlexContainer, PlusIcon } from "../../components";

const ListItem = styled(FlexContainer).attrs({
    as: 'li',
    $card: true,
})`
    justify-content: space-between;
    width: 100%;
    gap: var(--space-sm);
    padding: var(--space-sm);
    margin-bottom: var(--space-sm);

    img {
        height: 4rem;
        width: 5rem;
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

    .close-btn svg {
        transform: rotate(45deg);
    }
`;

const DetailsContainer = styled(FlexContainer)`
    flex: 1;
    max-width: 80%;
    flex-wrap: wrap;
    gap: var(--space-sm);
    justify-content: space-between;
`;

const TextContainer = styled(FlexContainer)`
    flex: 1;
    flex-basis: 45%;
    max-width: 15rem;
    justify-content: space-between;
    gap: var(--space-sm);
    `;

const ButtonsContainer = styled(FlexContainer)`
    flex: 1;
    flex-basis: 45%;
    max-width: 15rem;
    justify-content: space-between;
    gap: var(--space-sm);
`;


export const CartItem = ({item}) => {
    const {addItem, removeItem} = useContext(CartContext);
    const {id, title, image, price, quantity, stock} = item;
    const onCount = useCallback(count => addItem(item, count), [item, addItem]);

    return(
        <ListItem>
                <img src={image} alt={title}/>
            <DetailsContainer>
                <TextContainer>
                    <h4>{title}</h4>
                    <b>${price * quantity}</b>
                </TextContainer>
                <ButtonsContainer>
                    <Button onClick={() => removeItem(id)} $border className="close-btn"><PlusIcon/></Button>
                    <Counter initial={quantity} max={stock} onCount={onCount}/>
                </ButtonsContainer>
            </DetailsContainer>
        </ListItem>
    )
};