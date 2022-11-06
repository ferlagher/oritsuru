import { useState } from "react"

export const useFavToggle = (id) => {
    const getStorage = () => JSON.parse(localStorage.getItem('favs')) ?? [];
    const isInStorage = getStorage().includes(id);
    const [isFav, setFav] = useState(isInStorage);

    const toggleFav = () => {
        setFav(wasFav => {
            const newStorage = getStorage();
            const i = newStorage.findIndex(el => el === id);
            
            wasFav ? newStorage.splice(i, 1) : newStorage.push(id);
            localStorage.setItem('favs', JSON.stringify(newStorage));

            return !wasFav;
        });
    };

    return [isFav, toggleFav];
};