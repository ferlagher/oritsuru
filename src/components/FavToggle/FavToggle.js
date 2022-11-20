import { Toggle, HeartIcon } from "../";
import { useFavToggle } from "./useFavToggle";

export const FavToggle = ({id}) => {
    const [isInStorage, toggleFav] = useFavToggle(id);
    console.log("🚀 ~ file: FavToggle.js ~ line 6 ~ FavToggle ~ isInStorage", isInStorage)

    return(
        <Toggle value={isInStorage} onToggle={toggleFav}>
            <HeartIcon/>
        </Toggle>
    );
};