import { useEffect, useState } from "react";
import { throttle } from "../../../utils/throttle";

export const useParallax = () => {
    const [y, setY] = useState(window.scrollY);

    useEffect(() => {
        const handleParallax = throttle(() => setY(window.scrollY), 50);

        window.addEventListener('scroll', handleParallax);

        return () => window.removeEventListener('scroll', handleParallax);
    }, []);

    return y;
};