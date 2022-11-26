export const halftoneBkgd = color => `
background-image: 
radial-gradient(${color} 28%, transparent 28%),
radial-gradient(${color} 28%, transparent 28%);
background-position: 0px 0px, 3px 3px;
background-size: 6px 6px, 6px 6px;
`;

export const halftoneRaysBkgd = (colorBg, colorDots) => `
    background-image: 
        repeating-conic-gradient(${colorBg} 0 9deg, transparent 9deg 18deg),
        radial-gradient(${colorDots}) 28%, transparent 28%),
        radial-gradient(${colorDots}) 28%, transparent 28%);
    background-position: 50% 0%, 0px 0px, 3px 3px;
    background-size: 100% 200%, 6px 6px, 6px 6px;
`;


export const gridBkgd = color => `
background-image: 
        linear-gradient(${color} 0.1em, transparent 0.1em), 
        linear-gradient(90deg, ${color} 0.1em, transparent 0.1em);
    background-size: 1.5rem 1.5rem;
    background-origin: border-box;
    border: var(--border) ${color};
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