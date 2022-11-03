import { useEffect, useState } from "react";
import { throttle } from "../../../utils/throttle";

export const useParallax = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const handleParallax = throttle(e => {
            //Position from the center of the screen
            const newX = (((e.clientX / window.innerWidth) - 0.5) * 100);
            const newY = (((e.clientY / window.innerHeight) - 0.5) * 100);

            newX && setX(newX);
            newX && setY(newY);
        }, 50);

        window.addEventListener('mousemove', handleParallax);

        return () => window.removeEventListener('scroll', handleParallax);
    }, []);

    return [x, y];
};