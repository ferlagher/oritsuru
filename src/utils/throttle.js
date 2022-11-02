export const throttle = (callback, delay) => {
    let timeOut;
    let storedArgs;

    const timeoutFunc = () => {
        if (storedArgs) {
            callback(...storedArgs);
            storedArgs = null;
            setTimeout(timeoutFunc, delay);
        } else {
            timeOut = null
        };
    };

    return (...args) => {
        storedArgs = args;

        if (!timeOut) {
            callback(storedArgs);
            storedArgs = null;
            timeOut = setTimeout(timeoutFunc, delay);
        } else {
            storedArgs = args;
        };
    };
};