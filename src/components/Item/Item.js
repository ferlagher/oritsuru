import styled from "styled-components";
import { FlexContainer } from "../base";
import { FavToggle } from "../FavToggle/FavToggle";
import { Ribbon } from '../base/Ribbon';

const ItemContainer = styled(FlexContainer).attrs({
    as: 'li',
})`
    align-items: stretch;
    width: min(20rem, 100%);
    height: 5em;
`;

const ItemImg = styled.img`
    height: 100%;
    width: auto;
    min-width: 8.4rem;
    border-radius: 0.4em;
`;

export const Item = ({item, favs}) => {
    return(
        <ItemContainer>
            <Ribbon text={item.isVeggie && 'Veggie'} color='avocado'>
                <ItemImg src={item.image} alt={item.title}/>
            </Ribbon>

                <FlexContainer justify='space-between' align='stretch' flex='auto' gap='var(--space-sm)' padding='var(--space-sm)'>
                    <FlexContainer direction='column' justify='space-between' align='flex-start'>
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                    </FlexContainer>

                    <FavToggle id={item.id} favs={favs}/>
                </FlexContainer>
        </ItemContainer>
    );
};