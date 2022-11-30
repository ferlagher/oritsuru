export const useCounter = (count, max, setCount) => {

    const increase = () => {
        setCount(Math.min(count + 1, max));
    };

    const decrease = () => {
        setCount(Math.max(count - 1, 1));
    };

    const onChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue = Math.min(currentValue, max);
        
        setCount(newValue || 1);
    };

    return [increase, decrease, onChange];
};