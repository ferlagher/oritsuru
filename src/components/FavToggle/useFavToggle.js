import { useContext } from "react";
import { ItemsContext } from "../../context";

export const useFavToggle = (id) => {
    const {favs, setFavs} = useContext(ItemsContext);
    const isFav = favs.includes(id);

    const toggleFav = () => {
        setFavs(prevFavs => {
            const newFavs = [...prevFavs];
            const i = newFavs.findIndex(favId => favId === id);
            
            i === -1 ? newFavs.push(id) : newFavs.splice(i, 1);
            localStorage.setItem('favs', JSON.stringify(newFavs));
            return newFavs;
        });
    };

    return [isFav, toggleFav];
};