import styled from "styled-components";
import { IconButton, HeartIcon } from "../../atoms";
import { useFavButton } from "./useFavButton";

const Btn = styled(IconButton)`
    font-size: 1rem;

    svg {
        fill: ${({isFav}) => isFav ? 'var(--color-tuna)' : 'transparent'};
        stroke: var(--color-tuna);
        stroke-width: 40px;
    }
`;

export const FavButton = ({id, favs}) => {
    const [isFav, toggleFav] = useFavButton(id, favs);

    return(
        <Btn isFav={isFav} onClick={toggleFav}>
            <HeartIcon/>
        </Btn>
    );
};