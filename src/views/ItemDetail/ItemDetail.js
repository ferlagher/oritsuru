import styled from "styled-components";
import { FavToggle, FlexContainer, ItemImg, Loader, EmptyState, Badge } from "../../components";
import { textOutline, scaleUp } from "../../utils";
import { Cart } from "../Cart/Cart";
import { ItemCount, } from "./ItemCount";
import { useItemDetail } from "./useItemDetail";

const ItemContainer = styled(FlexContainer)`
    flex-wrap: wrap;
    align-self: stretch;
    width: 100%;
    height: 100%;
    overflow: hidden;
    max-width: var(--max-width);
    gap: var(--space-lg);
    padding: var(--space-lg);
    border: var(--border) var(--color-background-dark);
    transform: skewY(var(--skew-deg));
    margin-bottom: calc(var(--skew-margin-factor) * 100vw);
    
    & > div {
        transform: skewY(calc(var(--skew-deg) * -1));
    }
`;

const ImgContainer = styled(FlexContainer)`
    position: relative;
    margin-top: 2rem;
    width: min(40vh, 70vw);

    & > div {
        filter:
            drop-shadow(0.4rem 0.4rem 0 var(--color-background))
            drop-shadow(0.4rem -0.4rem 0 var(--color-background))
            drop-shadow(-0.4rem 0.4rem 0 var(--color-background))
            drop-shadow(-0.4rem -0.4rem 0 var(--color-background));
    }

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

const DetailsContainer = styled(FlexContainer).attrs({
    $card: true,
})`
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
    padding: var(--space-lg);
    background-color: var(--color-background);
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
        border-radius: var(--border-radius);
    }
    
    b {
        font-size: 1.3rem;
        font-weight: 500;
        padding: 0.25em 0;
        ${textOutline('var(--color-background)')}
    }
`;

export const ItemDetail = () => {
    const [isLoading, item, quantityInCart, addItem] = useItemDetail();
    const {id, title, description, portion, image, price, stock, isVeggie} = item || {};
    
    return(<>
        <section>{
            isLoading ? <Loader/> :
            !item ? <EmptyState view='noItem'/> :
            <ItemContainer>
                <ImgContainer>
                    <ItemImg src={image} alt={title} isGarnishShown={true}/>
                </ImgContainer>
                <DetailsContainer>
                    <FlexContainer $gap='var(--space-sm)'>
                        <h3>{title}</h3>
                        <FavToggle id={id}/>
                    </FlexContainer>
                    <p>{description}</p>
                    <p>Porción: {portion + (portion > 1 ? ' piezas.' : ' pieza.')}</p>
                    <FlexContainer $gap='var(--space-sm)'>
                    <b>${price}</b>
                    {isVeggie && <Badge>Veggie</Badge>}
                    </FlexContainer>
                    <ItemCount stock={stock} inCart={quantityInCart} onAdd={count => addItem(item, count)}/>
                </DetailsContainer>
            </ItemContainer>
        }</section>
        <aside>
            <Cart $small/>
        </aside>
    </>);
};