const colors = {
    salmon: [25, 83, 59],
    tuna: [1, 59, 56],
    avocado: [67, 49, 48],
    nori: [79, 15, 15],
    rice: [59, 16, 96],
    bg: [0, 0, 91],
};

const createTheme = (arr) => {
    const theme = {
        base: {},
        dark: {},
        light: {},
    };

    for (const color in arr) {
        const [h, s, l] = colors[color];

        const base = `hsl(${h}, ${s}%, ${l}%)`;
        const dark = `hsl(${h}, ${s + 5}%, ${l - 10}%)`;
        const light = `hsl(${h}, ${s - 5}%, ${l + 10}%)`;
        
        theme.base[color] = base;
        theme.dark[color] = dark;
        theme.light[color] = light;
    };

    return theme
};

export const theme = createTheme(colors)