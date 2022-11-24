export const useFavToggle = (id) => {
    const getStorage = () => JSON.parse(localStorage.getItem('favs')) ?? [];
    const isFav = getStorage().includes(id);

    const toggleFav = (isChecked) => {
        const newStorage = getStorage();
        const i = newStorage.findIndex(el => el === id);
        
        isChecked ? newStorage.push(id) : newStorage.splice(i, 1);
        localStorage.setItem('favs', JSON.stringify(newStorage));;
    };

    return [isFav, toggleFav];
};