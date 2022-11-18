import styled from "styled-components";
import { FavToggle, FlexContainer, ItemImg, ItemCount, Loader } from "../";
import { scaleUp } from "../../utils/keyframes";
import { textOutline } from "../../utils/mixins";
import { useItemDetail } from "./useItemDetail";

const ItemContainer = styled(FlexContainer)`
    flex-wrap: wrap;
    align-self: stretch;
    width: 100%;
    overflow: hidden;
    max-width: var(--max-width);
    gap: var(--space-sm);
    padding: var(--space-lg);
`;

const ImgContainer = styled(FlexContainer)`
    padding: var(--space-lg);
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
    align-items: stretch;
    gap: var(--space-sm);
    z-index: 2;

    h3 {
        width: 100%;
        font-size: 1.5em;
        font-weight: 700;
        color: var(--color-primary);
    }

    p {
        background-color: var(--color-background);
        width: fit-content;
    }

    b {
        font-size: 1.4em;
        font-weight: 500;
        padding: 0.25em 0;
        ${textOutline('var(--color-background)')}
    }
`;

export const ItemDetail = () => {
    const [item, isLoading] = useItemDetail();

    return(
        isLoading ? <Loader/> :
        <ItemContainer>
            <ImgContainer>
                <ItemImg item={item} isGarnishShown={true} $size='75vmin'/>
            </ImgContainer>

            <DetailsContainer>
                <FlexContainer justify='space-between'>
                    <h3>{item.title}</h3>
                    <FavToggle id={item.id}/>
                </FlexContainer>

                <p><i>{item.description}</i></p>
                <b>${item.price}</b>

                <ItemCount stock={item.stock} onAdd={alert} color='primary'/>
            </DetailsContainer>
        </ItemContainer>
    );
};