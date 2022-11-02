import { useEffect, useState } from "react";
import { throttle } from "../../../utils/throttle";

export const useParallax = () => {
    const [y, setY] = useState(window.scrollY);

    const handleParallax = throttle(() => setY(window.scrollY), 50);

    useEffect(() => {
        window.addEventListener('scroll', handleParallax);

        return () => window.removeEventListener('scroll', handleParallax);
    }, []);

    return y;
};