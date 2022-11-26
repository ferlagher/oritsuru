import styled from "styled-components";
import { Toggle, HeartIcon } from "../";
import { useFavToggle } from "./useFavToggle";

const StyledToggle = styled(Toggle)`
    svg {
        fill: var(--color-background);
        stroke: var(--color-secondary);
        stroke-width: 2rem;
        margin: 4px;
    }
    
    &:hover svg, input:focus-visible + svg {
        stroke: var(--color-primary);
    }

    input:checked + svg {
        fill: var(--color-primary);
    }
`;

export const FavToggle = ({id}) => {
    const [isFav, toggleFav] = useFavToggle(id);

    return(
        <StyledToggle value={isFav} onToggle={toggleFav}>
            <HeartIcon/>
        </StyledToggle>
    );
};