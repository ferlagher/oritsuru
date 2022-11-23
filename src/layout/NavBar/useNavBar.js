import { useEffect, useState } from "react";
import { getCollection } from "../../utils";

const getData = async (setCategories, setIsLoading) => {
    const data = await getCollection('categories');
    setCategories(data);
    setIsLoading(false);
};

export const useNavBar = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData(setCategories, setIsLoading);
    }, [])

    return [categories, isLoading];
};
