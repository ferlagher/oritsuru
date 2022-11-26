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
        border-left: var(--border) var(--color-secondary);
    }
`;

const LinkWrapper = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;

    &:focus {
        outline: none;
    }

    & > div:first-child {
        filter:
            drop-shadow(0.1rem 0.1rem 0 var(--color-secondary))
            drop-shadow(0.03rem -0.03rem 0 var(--color-secondary))
            drop-shadow(-0.03rem 0.03rem 0 var(--color-secondary))
            drop-shadow(-0.03rem -0.03rem 0 var(--color-secondary));
    }
`;

const ItemText = styled(FlexContainer)`
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    gap: 0.25em;
    position: relative;
    z-index: 3;
    
    h4 {
        font-size: 1em;
        font-weight: 700;
        width: 100%;
    }
    
    b {
        font-size: 0.9em;
        font-weight: 500;
    }
`;

export const Item = memo(({item = {}}) => {
    const [isHover, setIsHover] = useState(false);
    const {id, title, image, price, isVeggie} = item;

    return(
        <ListItem onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            <LinkWrapper to={`/item/${id}`} onFocus={() => setIsHover(true)} onBlur={() => setIsHover(false)}>
                <ItemImg src={image} alt={title} isGarnishShown={isHover} $size='5.5rem'/>
                <ItemText>
                    <h4>{title}</h4>
                    <b>${price}</b>
                    {isVeggie && <Badge>Veggie</Badge>}
                </ItemText>
            </LinkWrapper>
            <FavToggle id={id}/>
        </ListItem>
    );
});