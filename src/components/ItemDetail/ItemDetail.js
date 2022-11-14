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
    max-width: 20rem;
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
    background-image: linear-gradient(var(--color-secondary-light) 0.1em, transparent 0.1em), linear-gradient(90deg, var(--color-secondary-light) 0.1em, transparent 0.1em);
    background-size: 1.5rem 1.5rem;
    box-shadow: 
        0.5rem 0.5rem 0 var(--color-background),
        1rem 1rem 0 var(--color-${({color}) => color}-dark);
    
    h3 {
        font-size: 1.5em;
        font-weight: 700;
        color: var(--color-${({color}) => color});
        text-shadow: 
            0.05em 0.05em 0 var(--color-foreground),
            0.05em -0.05em 0 var(--color-foreground),
            -0.05em 0.05em 0 var(--color-foreground),
            -0.05em -0.05em 0 var(--color-foreground),
            0 0.05em 0 var(--color-foreground),
            0.05em 0 0 var(--color-foreground),
            0 -0.05em 0 var(--color-foreground),
            -0.05em 0 0 var(--color-foreground);
    }

    p {
        background-color: var(--color-secondary);
        width: fit-content;
    }

    b {
        font-size: 1.4em;
        font-weight: 500;
        padding: 0.25em 0;
        text-shadow: 0.1em 0.1em 0 var(--color-${({color}) => color}-dark);
    }
    `;

export const ItemDetail = () => {
    const [item, isLoading] = useItemDetail();
    const color = item.isVeggie ? 'accent' : 'primary';

    return(
        isLoading ? <Loader/> :
        <ItemContainer>
            <ImgContainer>
                    <Garnish category={item.categoryId} isHover={true}/>
                    <ItemImg color={color} src={item.image} alt={item.title}/>
            </ImgContainer>

            <DetailsContainer color={color}>
                <FlexContainer justify='space-between'>
                    <h3>{item.title}</h3>
                    <FavToggle id={item.id}/>
                </FlexContainer>
                <p><i>{item.description}</i></p>
                <b>${item.price}</b>
                

                <ItemCount color={color} stock={item.stock} onAdd={alert}/>
            </DetailsContainer>
        </ItemContainer>
    );
};