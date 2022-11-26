// Values are [hue, saturation(%), lightness(%)]
// Hue is a degree on the color wheel. 0 is red, 120 is green, 240 is blue.
const COLORS = {
    primary: [25, 85, 50],
    secondary: [249, 30, 26],
    accent: [118, 80, 35],
    background: [25, 35, 87],
};

const createTheme = (colors) => {
    let theme = '';

    for (const color in colors) {
        const [h, s, l] = colors[color];

        const add = (n, m) => Math.min(n + m, 100);
        const subtract = (n, m) => Math.max(n - m, 0);

        theme += `--color-${color}: hsl(${h}, ${s}%, ${l}%);`;
        theme += `--color-${color}-dark: hsl(${h}, ${add(s, 5)}%, ${subtract(l, 10)}%);`;
        theme += `--color-${color}-light: hsl(${h}, ${subtract(s, 5)}%, ${add(l, 10)}%);`;
        theme += `--color-${color}-transparent: hsla(${h}, ${s}%, ${l}%, 0.5);`;
    };

    return theme;
};

export const theme = createTheme(COLORS);