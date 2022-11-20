export const useFavToggle = (id) => {
    const getStorage = () => JSON.parse(localStorage.getItem('favs')) ?? [];
    const isInStorage = getStorage().includes(id);

    const toggleFav = (isFav) => {
        const newStorage = getStorage();
        const i = newStorage.findIndex(el => el === id);
        
        isFav ? newStorage.push(id) : newStorage.splice(i, 1);
        localStorage.setItem('favs', JSON.stringify(newStorage));;
    };

    return [isInStorage, toggleFav];
};