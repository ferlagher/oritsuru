import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getItems } from "../../utils/getItems";

export const useItemDetail = (id = 'VLvVElJMpkUzteUeI4nl') => {
    const [item, setItem] = useState({});
    const [isLoading, setLoading] = useState(true);
    //const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await getItems(id);
            setItem(data);
            setLoading(false);
        };

        getData();
    }, [id]);

    return [item, isLoading]
}