export const useCounter = (max, setCount) => {

    const increase = () => {
        setCount(previousValue => Math.min(previousValue + 1, max));
    };

    const decrease = () => {
        setCount(previousValue => Math.max(previousValue - 1, 1));
    };

    const onChange = e => {
        const digits = e.target.value.replace(/\D+/g, '');
        const currentValue = Number(digits);
        const newValue = Math.min(currentValue, max);
        
        setCount(newValue || 1);
    };

    return [increase, decrease, onChange];
};