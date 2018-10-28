module.exports = function make(a) {
    const tempArr = [];
    for (let i = 0; i < arguments.length; i += 1) {
        tempArr.push(arguments[i]);
    }
    let result = tempArr.reduce(sum);

    const makeMore = function (b) {
        if (b === sum) return makeMore;
        tempArr.length = 0;
        for (let i = 0; i < arguments.length; i += 1) {
            tempArr.push(arguments[i]);
        }

        result += tempArr.reduce(sum);
        return makeMore;
    };
    makeMore.valueOf = function () {
        return result;
    };
    return makeMore;
};