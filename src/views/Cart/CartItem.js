import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../../context";
import { Button, Counter, FlexContainer, PlusIcon } from "../../components";

const ListItem = styled(FlexContainer).attrs(({$small}) => ({
    as: 'li',
    $card: !$small,
}))`
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

    ${({$small}) => $small && `
        padding: 0;

        h4 {
            max-width: 80%;
        }
    `}
`;

const DetailsContainer = styled(FlexContainer)`
    flex: 1;
    max-width: 80%;
    flex-wrap: wrap;
    gap: var(--space-sm);
    justify-content: space-between;

    ${({$small}) => $small && `
        max-width: 100%;
    `}
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

    ${({$small}) => $small && `
        display: none;
    `}
`;


export const CartItem = ({item, $small}) => {
    const {addItem, removeItem} = useContext(CartContext);
    const {id, title, image, price, quantity, stock} = item;
    const [count, setCount] = useState(quantity);

    useEffect(() => {
        addItem(item, count - quantity);
    }, [count, addItem, item, quantity]);

    return(
        <ListItem $small={$small}>
                <img src={image} alt={title}/>
            <DetailsContainer $small={$small}>
                <TextContainer>
                    <h4>{title}</h4>
                    <b>${price * quantity}</b>
                </TextContainer>
                <ButtonsContainer $small={$small}>
                    <Button onClick={() => removeItem(id)} $border className="close-btn"><PlusIcon/></Button>
                    <Counter count={count} max={stock} setCount={setCount}/>
                </ButtonsContainer>
            </DetailsContainer>
        </ListItem>
    )
};