const lightColors = {
    salmon: [25, 83, 59],
    tuna: [1, 59, 56],
    avocado: [67, 49, 48],
    nori: [79, 15, 15],
    rice: [59, 16, 96],
    text: [79, 15, 15],
    bg: [0, 0, 91],
};

const darkColors = {
    salmon: [25, 83, 55],
    tuna: [1, 59, 52],
    avocado: [67, 49, 44],
    nori: [79, 15, 10],
    rice: [59, 16, 92],
    text: [59, 16, 92],
    bg: [0, 0, 15],
};

const createTheme = (arr) => {
    const theme = {};

    for (const color in arr) {
        const [h, s, l] = arr[color];

        const add = (n, m) => Math.min(n + m, 100);
        const subtract = (n, m) => Math.max(n - m, 0);

        theme[color] = `hsl(${h}, ${s}%, ${l}%)`;
        
        if (color != 'text' && color != 'bg') {
            theme[color + '-dark'] = `hsl(${h}, ${add(s, 5)}%, ${subtract(l, 10)}%)`;
            theme[color + '-light'] = `hsl(${h}, ${subtract(s, 5)}%, ${add(l, 10)}%)`;
        };
    };

    return theme;
};

export const themes = {
    light: createTheme(lightColors), 
    dark : createTheme(darkColors)
};