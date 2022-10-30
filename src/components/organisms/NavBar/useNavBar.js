import { useEffect, useRef, useState } from "react";
import { throttle } from "./throttle";

export const useNavBar = () => {
    const [isOpaque, setOpaque] = useState(false);
    const [isHidden, setHidden] = useState(false);
    const y = useRef(0);

    useEffect(() => {
        window.addEventListener("scroll", throttle(() => {
            setOpaque(window.scrollY > 100);
            setHidden(window.scrollY > y.current);

            y.current = window.scrollY;
        }, 500));
    }, []);
    

    return [isOpaque, isHidden];
};