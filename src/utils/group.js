export const group = (arr, key) => {
    return arr.reduce((groups, obj) => {
        const keyName = obj?.[key];

        groups[keyName] ??= [];
        groups[keyName].push(obj);

        return groups;
    }, {});
};