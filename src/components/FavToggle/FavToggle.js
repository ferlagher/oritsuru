import { Toggle, HeartIcon } from "../";
import { useFavToggle } from "./useFavToggle";

export const FavToggle = ({id}) => {
    const [isInStorage, toggleFav] = useFavToggle(id);

    return(
        <Toggle value={isInStorage} onToggle={toggleFav}>
            <HeartIcon/>
        </Toggle>
    );
};