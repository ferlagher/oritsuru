import styled from "styled-components";
import { FlexContainer } from "../../atoms";
import { FavButton } from "../FavButton/FavButton";
import { Ribbon } from '../Ribbon';

const ItemContainer = styled(FlexContainer)`
    height: 5em;
    width: 100%;
    border-radius: 0.5em;
    overflow: hidden;
    background-color: #000;
    box-shadow: var(--shadow-md);
    `;

const DetailsContainer = styled(FlexContainer)`
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: var(--space-sm);
    padding: var(--space-sm);
    background-color: var(--color-bg-light);
    border-radius: 0.5em 0 0 0.5em;
    overflow: hidden;
`;

const ItemImg = styled.img`
    height: 100%;
    width: auto;
`;

export const Item = ({item, favs}) => {
    return(
        <Ribbon as='li' text={item.isVeggie && 'Veggie'} color='avocado'>
            <ItemContainer>
                <ItemImg src={item.image}/>

                <DetailsContainer>
                    <FlexContainer direction='column' align='flex-start'>
                        <h3>{item.title}</h3>
                        <b>${item.price}</b>
                    </FlexContainer>

                    <FavButton id={item.id} favs={favs}/>
                </DetailsContainer>
            </ItemContainer>
        </Ribbon>
    );
};