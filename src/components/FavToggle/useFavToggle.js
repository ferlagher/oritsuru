import { useContext } from "react";
import { ItemsContext } from "../../context";

export const useFavToggle = (id) => {
    const {favs} = useContext(ItemsContext);
    const isFav = favs.current.includes(id);

    const toggleFav = () => {
        const newFavs = [...favs.current];
        const i = newFavs.findIndex(favId => favId === id);
        
        i === -1 ? newFavs.push(id) : newFavs.splice(i, 1);
        localStorage.setItem('favs', JSON.stringify(newFavs));
        favs.current = newFavs;
    };

    return [isFav, toggleFav];
};