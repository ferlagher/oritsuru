import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext, ItemsContext } from "../../context";

export const useItemDetail = () => {
    const {allItems, isLoading} = useContext(ItemsContext);
    const {cartList, addItem} = useContext(CartContext);
    const {id} = useParams();
    const item = allItems.find(obj => obj.id === id);
    const quantityInCart = cartList.find(obj => obj.id === id)?.quantity ?? 0;

    return [isLoading, item, quantityInCart, addItem];
};