import styled from "styled-components";
import { Button, HeartIcon } from "../../atoms";
import { useFavButton } from "./useFavButton";

const Btn = styled(Button)`
    background-color: transparent;
    border: none;
    box-shadow: none;
    margin: -0.75em;

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