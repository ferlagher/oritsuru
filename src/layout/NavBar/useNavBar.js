import { useEffect, useState } from "react";
import { throttle } from "../../utils/throttle";

export const useNavBar = () => {
    const [isSmall, setIsSmall] = useState(false);
    
    useEffect(() => {
        const handleScroll = throttle(() => {
            setIsSmall(window.scrollY > 100);
        }, 250);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isSmall;
};