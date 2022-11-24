import { useEffect, useState } from "react";

export const useItemCount = maxValue => {
    const initialValue = maxValue ? 1 : 0;

    const [count, setCount] = useState(initialValue);

    const increase = () => {
        setCount(previousValue => Math.min(previousValue + 1, maxValue));
    };

    const decrease = () => {
        setCount(previousValue => Math.max(previousValue - 1, 0));
    };

    const handleChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue = Math.min(currentValue, maxValue);

        setCount(newValue);
    };

    useEffect(() => {
        setCount(previousValue => Math.min(previousValue, maxValue));
    }, [maxValue]);

    return [count, increase, decrease, handleChange];
};