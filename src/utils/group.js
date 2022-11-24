export const group = (arr, key) => {
    return arr.reduce((groups, obj) => {
        const keyName = obj?.[key];

        groups[keyName] ??= [];
        groups[keyName].push(obj);

        return groups;
    }, {});
};

// const example = [{id: 1, cat: 🐱‍🐉}, {id: 2, cat: 🐱‍🐉}, {id: 3, cat: 🐱‍👤}]
// group(example, cat) ➡ {🐱‍🐉: [{id: 1, cat: 🐱‍🐉}, {id: 2, cat: 🐱‍🐉}], 🐱‍👤: [{id: 3, cat: 🐱‍👤}]}