import { useEffect, useRef, useState } from "react";
import { throttle } from "../../utils/throttle";

export const useNavBar = () => {
    const [isOpaque, setOpaque] = useState(false);
    const [isHidden, setHidden] = useState(false);
    const y = useRef(window.scrollY);
    
    useEffect(() => {
        const handleScroll = throttle(() => {
            setOpaque(window.scrollY > 80);
            console.log("🚀 ~ file: useNavBar.js ~ line 12 ~ handleScroll ~ window.scrollY > 80", window.scrollY > 80)
            setHidden(window.scrollY > y.current);
            console.log("🚀 ~ file: useNavBar.js ~ line 13 ~ handleScroll ~ window.scrollY", window.scrollY)
            
            y.current = window.scrollY;
        }, 250);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return [isOpaque, isHidden];
};