import { memo } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FlexContainer, FavToggle, ItemImg } from "../../components";
import { useState } from "react";


const ListItem = styled(FlexContainer).attrs({
    as: 'li',
})`
    justify-content: space-between;
    width: min-content;
    gap: var(--space-sm);
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
    min-width: 5.5em;
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

    return(
        <ListItem onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            <LinkWrapper to={`/item/${item.id}`} onFocus={() => setIsHover(true)} onBlur={() => setIsHover(false)}>
                <ItemImg src={item.image} alt={item.title} isGarnishShown={isHover} $size='6rem'/>

                <ItemText>
                    <h4>{item.title}</h4>
                    <b>${item.price}</b>
                </ItemText>
            </LinkWrapper>

            <FavToggle id={item.id}/>
        </ListItem>
    );
});