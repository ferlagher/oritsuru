import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocument } from "../../utils";

export const useOrderDetail = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getDocument('orders', id)
            .then(data => setOrder(data))
            .finally(() => setIsLoading(false));
    }, []);

    return [order, isLoading];
};