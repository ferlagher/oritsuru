import styled from "styled-components";
import { IconButton, HeartIcon } from "../";
import { useFavToggle } from "./useFavToggle";

const Label = styled(IconButton).attrs({
    as: 'label',
})`
    z-index: 2;
    
    svg {
        fill: transparent;
        stroke: var(--color-foreground);
        stroke-width: 40px;
    }
`;

const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`
    width: 0;
    height: 0;
    opacity: 0;

    &:checked + svg {
        fill: var(--color-${({color}) => color});
    }
`;

export const FavToggle = ({id, favs, color}) => {
    const [isFav, toggleFav] = useFavToggle(id, favs);

    return(
        <Label>
            <Checkbox onChange={toggleFav} checked={isFav} color={color}/>
            <HeartIcon/>
        </Label>
    );
};