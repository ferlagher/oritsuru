import styled from "styled-components";
import { FlexContainer } from "../../atoms";
import { FavButton } from "../FavButton/FavButton";
import { Ribbon } from '../Ribbon';

const ItemContainer = styled(FlexContainer)`
    height: 5em;
    width: 100%;
    background-color: var(--color-bg);
    border-top: 1px solid var(--color-bg-light);
    border-bottom: 1px solid var(--color-bg-dark);
    `;

const ItemImg = styled.img`
    height: 100%;
    width: auto;
`;

export const Item = ({item, favs}) => {
    return(
        <Ribbon as='li' text={item.isVeggie && 'Veggie'} color='avocado'>
            <ItemContainer>
                <ItemImg src={item.image} alt={item.title}/>

                <FlexContainer justify='space-between' flex='auto' gap='var(--space-sm)' padding='var(--space-sm)'>
                    <FlexContainer direction='column' align='flex-start'>
                        <h3>{item.title}</h3>
                        <b>${item.price}</b>
                    </FlexContainer>

                    <FavButton id={item.id} favs={favs}/>
                </FlexContainer>
            </ItemContainer>
        </Ribbon>
    );
};