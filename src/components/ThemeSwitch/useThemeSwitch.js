import { useState } from "react";

export const useThemeSwitch = () => {
    const PrefersLocalDark = localStorage.getItem('darkTheme') === 'true';
    const PrefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultCheck = PrefersLocalDark ?? PrefersDark;
    const defaultTheme = defaultCheck ? 'dark' : 'light';
    
    const [theme, setTheme] = useState(defaultTheme);
    const [check, setCheck] = useState(defaultCheck);
    
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        setCheck(isChecked => !isChecked);
        localStorage.setItem('darkTheme', JSON.stringify(!check));
    };

    return [theme, check, toggleTheme];
};