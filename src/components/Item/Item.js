import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FlexContainer, FavToggle, Garnish } from "../";
import { useItemDetail } from "../ItemDetail/useItemDetail";
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
    height: 100%;
    width: auto;
    max-height: 8rem;
    filter: drop-shadow(0.1rem 0.2rem 0 var(--color-${({color}) => color}-dark));
    z-index: 2;
    `;

const ItemText = styled(FlexContainer)`
    flex-direction: column;
    align-items: stretch;
    gap: 0.25em;
    margin-top: -1.5rem;
    z-index: 3;

    h4 {
        font-size: 1.4em;
        font-weight: 700;
        color: var(--color-${({color}) => color});
        text-shadow: 
            0.08em 0.08em 0 var(--color-foreground),
            0.08em -0.08em 0 var(--color-foreground),
            -0.08em 0.08em 0 var(--color-foreground),
            -0.08em -0.08em 0 var(--color-foreground),
            0 0.08em 0 var(--color-foreground),
            0.08em 0 0 var(--color-foreground),
            0 -0.08em 0 var(--color-foreground),
            -0.08em 0 0 var(--color-foreground);
    }

    b {
        font-size: 1.2em;
        font-weight: 500;
        text-shadow: 0.1em 0.1em 0 var(--color-${({color}) => color}-dark);
    }
`;

export const Item = ({ite}) => {
    const [item, isLoading] = useItemDetail();
    const [isHover, setIsHover] = useState(false);

    const color = item.isVeggie ? 'accent' : 'primary';

    return(
        <ListItem onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            <LinkWrapper to={`/item/${item.id}`}>
                <ImgContainer>
                    <Garnish category={item.categoryId} isHover={isHover}/>
                    <ItemImg color={color} src={item.image} alt={item.title}/>
                </ImgContainer>

                <ItemText color={color}>
                    <h4>{item.title}</h4>

                    <FlexContainer justify='space-between' align='flex-end'>
                        <b>${item.price}</b>
                        <FavToggle id={item.id}/>
                    </FlexContainer>
                </ItemText>
            </LinkWrapper>
        </ListItem>
    );
};