import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFakeItems } from "../../utils";

export const useItemDetail = () => {
    const [item, setItem] = useState({});
    const [isLoading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await getFakeItems(id);
            setItem(data);
            setLoading(false);
        };

        getData();
    }, []);

    return [item, isLoading];
};