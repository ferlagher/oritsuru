import styled from "styled-components";
import { Toggle, HeartIcon } from "../";
import { useFavToggle } from "./useFavToggle";

const StyledToggle = styled(Toggle)`
    svg {
        fill: transparent;
        stroke: var(--color-secondary);
        stroke-width: 2rem;
    }
    
    &:hover svg, input:focus-visible + svg {
        stroke: var(--color-primary);
    }

    input:checked + svg {
        fill: var(--color-primary);
    }
`;

export const FavToggle = ({id}) => {
    const [isInStorage, toggleFav] = useFavToggle(id);

    return(
        <StyledToggle value={isInStorage} onToggle={toggleFav}>
            <HeartIcon/>
        </StyledToggle>
    );
};