// Values are [hue, saturation(%), lightness(%)]
// Hue is a degree on the color wheel. 0 is red, 120 is green, 240 is blue.
const colors = {
    primary: [25, 95, 50],
    secondary: [249, 30, 26],
    accent: [118, 90, 35],
    foreground: [0, 100, 100],
    background: [25, 40, 87],
};

const createTheme = (arr) => {
    let theme = '';

    for (const color in arr) {
        const [h, s, l] = arr[color];

        const add = (n, m) => Math.min(n + m, 100);
        const subtract = (n, m) => Math.max(n - m, 0);

        theme += `--color-${color}: hsl(${h}, ${s}%, ${l}%);`;
        theme += `--color-${color}-dark: hsl(${h}, ${add(s, 5)}%, ${subtract(l, 10)}%);`;
        theme += `--color-${color}-light: hsl(${h}, ${subtract(s, 5)}%, ${add(l, 10)}%);`;
        theme += `--color-${color}-transparent: hsla(${h}, ${s}%, ${l}%, 0.5);`;
    };

    return theme;
};

export const theme = createTheme(colors);