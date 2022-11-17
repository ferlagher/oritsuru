export const halftoneBkgd = color => `
    background-image: 
        radial-gradient(${color} 28%, transparent 28%),
        radial-gradient(${color} 28%, transparent 28%);
    background-position: 0px 0px, 3px 3px;
    background-size: 6px 6px, 6px 6px;
`;

export const gridBkgd = color => `
    background-image: 
        linear-gradient(${color} 0.1em, transparent 0.1em), 
        linear-gradient(90deg, ${color} 0.1em, transparent 0.1em);
    background-size: 1.5rem 1.5rem;
    background-origin: border-box;
    border: 0.1em solid var(--color-secondary-light);
`;

export const textOutline = (color, is3D = false) => `
    text-shadow: 
        ${is3D ? `0.1em 0.1em 0 ${color},` : ''}
        0.04em 0.04em 0 ${color},
        0.04em -0.04em 0 ${color},
        -0.04em 0.04em 0 ${color},
        -0.04em -0.04em 0 ${color},
        0 0.04em 0 ${color},
        0.04em 0 0 ${color},
        0 -0.04em 0 ${color},
        -0.04em 0 0 ${color};
`;