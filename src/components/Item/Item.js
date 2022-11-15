import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FlexContainer, FavToggle, Garnish } from "../";
import { useState } from "react";


const ListItem = styled(FlexContainer).attrs({
    as: 'li',
})`
    justify-content: space-between;
    width: min-content;
`;

const LinkWrapper = styled(Link)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgContainer = styled(FlexContainer)`
    position: relative;
    `;

const ItemImg = styled.img`
    height: 7rem;
    width: 10rem;
    object-fit: contain;
    filter: drop-shadow(0.1rem 0.2rem 0 var(--color-${({color}) => color}-dark));
    z-index: 2;
    `;

const ItemText = styled(FlexContainer)`
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25em;
    margin-top: -1.5rem;
    position: relative;
    z-index: 3;
    
    h4 {
        color: var(--color-${({color}) => color});
        font-size: 1.3em;
        font-weight: 700;
        text-shadow: var(--text-outline-foreground), 0.1em 0.1em 0 var(--color-foreground);
    }
    
    b {
        font-size: 1.25em;
        font-weight: 700;
        text-shadow: var(--text-outline-${({color}) => color}), 0.1em 0.1em 0 var(--color-${({color}) => color});
    }
`;

export const Item = ({item}) => {
    const [isHover, setIsHover] = useState(false);

    const color = item.isVeggie ? 'accent' : 'primary';

    return(
        <ListItem onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            <LinkWrapper to={`/item/${item.id}`}>
                <ImgContainer>
                    <Garnish category={item.categoryId} isVisible={isHover}/>
                    <ItemImg color={color} src={item.image} alt={item.title}/>
                </ImgContainer>

                <ItemText color={color}>
                    <h4>{item.title}</h4>

                    <FlexContainer justify='flex-start' gap='1em'>
                        <b>${item.price}</b>
                        <FavToggle id={item.id} color={color}/>
                    </FlexContainer>
                </ItemText>
            </LinkWrapper>
        </ListItem>
    );
};