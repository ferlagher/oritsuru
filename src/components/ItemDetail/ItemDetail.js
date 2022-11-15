import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, ItemCount, FavToggle, Loader, Garnish } from "../";
import { useItemDetail } from "./useItemDetail";

const ItemContainer = styled(FlexContainer)`
    flex-wrap: wrap;
    gap: var(--space-sm);
    padding: var(--space-lg);
`;

const ImgContainer = styled(FlexContainer)`
    position: relative;
    `;

const ItemImg = styled.img`
    height: auto;
    width: 100%;
    max-height: 16rem;
    max-width: 20rem;
    object-fit: contain;
    z-index: 2;
    filter: drop-shadow(0.3rem 0.5rem 0 var(--color-${({color}) => color}-dark));
    `;

const DetailsContainer = styled(FlexContainer)`
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-sm);
    padding: var(--space-sm);
    transform: skewY(-6deg);
    background-color: var(--color-secondary);
    background-image: 
    linear-gradient(var(--color-secondary-light) 0.1em, transparent 0.1em), 
    linear-gradient(90deg, var(--color-secondary-light) 0.1em, transparent 0.1em);
    background-size: 1.5rem 1.5rem;
    box-shadow: 
    0.5rem 0.5rem 0 var(--color-background),
    1rem 1rem 0 var(--color-${({color}) => color});
    
    h3 {
        color: var(--color-${({color}) => color});
        font-size: 1.5em;
        font-weight: 700;
        text-shadow: var(--text-outline-background);
    }

    p {
        background-color: var(--color-secondary);
        width: fit-content;
    }

    b {
        font-size: 1.4em;
        font-weight: 500;
        padding: 0.25em 0;
        text-shadow: 0.1em 0.1em 0 var(--color-${({color}) => color});
    }
    `;

export const ItemDetail = () => {
    const [item, isLoading] = useItemDetail();
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const color = item.isVeggie ? 'accent' : 'primary';

    return(
        isLoading ? <Loader/> :
        <ItemContainer>
            <ImgContainer>
                    <Garnish category={item.categoryId} isVisible={isImgLoaded}/>
                    <ItemImg src={item.image} alt={item.title} onLoad={() => setIsImgLoaded(true)} color={color}/>
            </ImgContainer>

            <DetailsContainer color={color}>
                <FlexContainer justify='space-between'>
                    <h3>{item.title}</h3>
                    <FavToggle id={item.id} color={color}/>
                </FlexContainer>

                <p><i>{item.description}</i></p>
                <b>${item.price}</b>

                <ItemCount stock={item.stock} onAdd={alert} color={color}/>
            </DetailsContainer>
        </ItemContainer>
    );
};