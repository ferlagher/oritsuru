import styled from "styled-components";
import { FlexContainer, Ribbon, ItemCount, FavToggle, Loader } from "../";
import { useItemDetail } from "./useItemDetail";
import bg from '../../assets/pattern.svg'

const ItemContainer = styled(FlexContainer)`
    flex-direction: column;
    justify-content: space-between;
    max-width: 20rem;
    border-radius: 0.5em;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    background-color: #000;
`;

const ItemImg = styled.img`
    height: auto;
    width: 100%;
`;

const DetailsContainer = styled(FlexContainer)`
flex-direction: column;
align-items: stretch;
width: 100%;
gap: var(--space-sm);
padding: var(--space-sm);
border-radius: 0.5em 0.5em 0 0;
overflow: hidden;
background-color: var(--color-bg-light);
background-image: url(${bg});
background-size: 5rem auto;
background-position: right;
background-repeat: repeat-y;
`;

const ItemPrice = styled.b`
    font-size: 1.5em;
    font-weight: 500;
    padding: 0.25em 0;
`;

export const ItemDetail = () => {
    const [item, isLoading] = useItemDetail();

    return(
        isLoading ? <Loader/> :
        <Ribbon text={item.isVeggie && 'Veggie'} color='avocado'>
        <ItemContainer>
            <ItemImg src={item.image} alt={item.title}/>

            <DetailsContainer>
                <FlexContainer justify='space-between'>
                    <h3>{item.title}</h3>
                    <FavToggle id={item.id}/>
                </FlexContainer>
                <p><i>{item.description}</i></p>
                <ItemPrice>${item.price}</ItemPrice>
                

                <ItemCount color={item.isVeggie ? 'avocado' : 'salmon'} stock={item.stock} onAdd={alert}/>
            </DetailsContainer>
        </ItemContainer>
    </Ribbon>
    );
};