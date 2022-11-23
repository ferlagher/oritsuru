import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FavToggle, FlexContainer, ItemImg, ItemCount, Loader, EmptyState } from "../";
import { CartContext, ItemsContext } from "../../context";
import { scaleUp } from "../../utils/keyframes";
import { textOutline } from "../../utils/mixins";

const ItemContainer = styled(FlexContainer).attrs({
    as: 'section',
})`
    flex-wrap: wrap;
    align-self: stretch;
    width: 100%;
    overflow: hidden;
    max-width: var(--max-width);
    gap: var(--space-lg);
    padding: var(--space-lg);
    transform: skewY(var(--skew-deg));
    margin-bottom: calc(var(--space-factor) * 100vw);
    
    & > div {
        transform: skewY(calc(var(--skew-deg) * -1));
    }
`;

const ImgContainer = styled(FlexContainer)`
    position: relative;

    &:has(.show)::before {
        content: '';
        position: absolute;
        width: 200vmax;
        height: 200vmax;
        border-radius: 200vmax;
        background-image: 
            repeating-conic-gradient(var(--color-background) 0 9deg, transparent 9deg 18deg),
            radial-gradient(var(--color-background-dark) 28%, transparent 28%),
            radial-gradient(var(--color-background-dark) 28%, transparent 28%);
        background-position: 0px 0px, 0px 0px, 3px 3px;
        background-size: 100% 100%, 6px 6px, 6px 6px;
        z-index: 0;
        animation: ${scaleUp} 1s ease-in;
    }
`;

const DetailsContainer = styled(FlexContainer)`
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
    z-index: 2;

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--color-background-light);
        ${textOutline('var(--color-secondary)', true)}
    }
    
    p {
        font-size: 1.1rem;
        max-width: 20rem;
        background-color: var(--color-background);
        border-radius: 2px;
    }
    
    b {
        font-size: 1.3rem;
        font-weight: 500;
        padding: 0.25em 0;
        ${textOutline('var(--color-background)')}
    }
    `;

export const ItemDetail = () => {
    const {isLoading, items} = useContext(ItemsContext);
    const {id} = useParams();
    const {cartList, addItem} = useContext(CartContext);
    const item = items.find(obj => obj.id === id);
    const quantityInCart = cartList.find(obj => obj.id === id)?.quantity ?? 0;

    return(
        isLoading ? <Loader/> :
        !item ? <EmptyState/> :
        <ItemContainer>
            <ImgContainer>
                <ItemImg item={item} isGarnishShown={true} $size='75vmin'/>
            </ImgContainer>

            <DetailsContainer>
                <FlexContainer gap='var(--space-sm)'>
                    <h3>{item.title}</h3>
                    <FavToggle id={item.id}/>
                </FlexContainer>

                <p><i>{item.description}</i></p>
                <b>${item.price}</b>

                <ItemCount stock={item.stock - quantityInCart} inCart={quantityInCart} onAdd={count => addItem(item, count)}/>
            </DetailsContainer>
        </ItemContainer>
    );
};