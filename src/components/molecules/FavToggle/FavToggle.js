import styled from "styled-components";
import { IconButton, HeartIcon } from "../../atoms";
import { useFavToggle } from "./useFavToggle";

const Label = styled(IconButton).attrs({
    as: 'label',
})`
    svg {
        fill: transparent;
        stroke: var(--color-tuna);
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
        fill: var(--color-tuna);
    }
`;

export const FavToggle = ({id, favs}) => {
    const [isFav, toggleFav] = useFavToggle(id, favs);

    return(
        <Label>
            <Checkbox onChange={toggleFav} checked={isFav}/>
            <HeartIcon/>
        </Label>
    );
};