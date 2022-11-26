import { memo } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FlexContainer, FavToggle, ItemImg, Badge } from "../../components";
import { useState } from "react";
import { halftoneBkgd } from "../../utils";


const ListItem = styled(FlexContainer).attrs({
    as: 'li',
    $card: true,
})`
    justify-content: space-between;
    align-items: stretch;
    
    label {
        ${halftoneBkgd('var(--color-secondary)')}
    }
`;

const LinkWrapper = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;

    &:focus {
        outline: none;
    }
`;

const ItemText = styled(FlexContainer)`
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25em;
    position: relative;
    z-index: 3;
    
    h4 {
        font-size: 1em;
        font-weight: 700;
    }
    
    b {
        font-size: 0.9em;
        font-weight: 500;
    }
`;

export const Item = memo(({item}) => {
    const [isHover, setIsHover] = useState(false);
    const {id, title, image, price, isVeggie} = item;

    return(
        <ListItem onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            <LinkWrapper to={`/item/${id}`} onFocus={() => setIsHover(true)} onBlur={() => setIsHover(false)}>
                <Badge mssg={isVeggie && 'Veggie'} $color='accent'>
                <ItemImg src={image} alt={title} isGarnishShown={isHover} $size='5.5rem'/>
                </Badge>

                <ItemText>
                    <h4>{title}</h4>
                    <b>${price}</b>
                </ItemText>
            </LinkWrapper>

            <FavToggle id={id}/>
        </ListItem>
    );
});