import { useState } from "react"

export const useFavToggle = (id, favs) => {
    const isInStorage = favs.current.includes(id);
    const [isFav, setFav] = useState(isInStorage);

    const toggleFav = () => {
        setFav(wasFav => {
            const i = favs.current.findIndex(el => el === id);
            
            wasFav ? favs.current.splice(i, 1) : favs.current.push(id);
            localStorage.setItem('favs', JSON.stringify(favs.current));

            return !wasFav;
        });
    };

    return [isFav, toggleFav];
};