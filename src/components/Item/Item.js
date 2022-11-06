import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FlexContainer, Ribbon, FavToggle } from "../";

const ListItem = styled(FlexContainer).attrs({
    as: 'li',
})`
    justify-content: space-between;
    width: min(20rem, 100%);
    height: 5.5em;
`;

const LinkWrapper = styled(Link)`
    height: 100%;
    display: flex;
`;

const ItemImg = styled.img`
    height: 100%;
    width: auto;
    min-width: 8.4rem;
    border-radius: 0.4em;
`;

export const Item = ({item, favs}) => {
    return(
        <ListItem>
            <LinkWrapper to={`/item/${item.id}`}>
                <Ribbon text={item.isVeggie && 'Veggie'} color='avocado'>
                    <ItemImg src={item.image} alt={item.title}/>
                </Ribbon>

                    <FlexContainer direction='column' justify='space-between' align='flex-start' padding='var(--space-sm)'>
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                    </FlexContainer>
            </LinkWrapper>

                    <FavToggle id={item.id}/>
        </ListItem>
    );
};