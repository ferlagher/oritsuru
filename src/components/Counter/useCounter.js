import { useEffect, useState } from "react";

export const useCounter = (initial, max, onCount) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(previousValue => Math.min(previousValue + 1, max));
    };

    const decrease = () => {
        setCount(previousValue => Math.max(previousValue - 1, 0));
    };

    const onChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue = Math.min(currentValue, max);
        
        setCount(newValue);
    };

    useEffect(() => {
        setCount(previousValue => Math.min(previousValue, max));
        onCount(count);
    }, [max, count, onCount]);

    return [count, increase, decrease, onChange];
};