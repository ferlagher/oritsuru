import { useState } from "react"

export const useToggle = (value, onToggle) => {
    const [isChecked, setIsChecked] = useState(value);

    const handleChange = () => {
        onToggle(!isChecked);
        setIsChecked(wasChecked => !wasChecked);
    };

    return [isChecked, handleChange];
};