module.exports = function recursion(tree) {
    let count = 0;
    let tempArr = [];
    const arrOfTree = [];
    const tempResult = [];
    arrOfTree.push(tree);
    const result = function repeat() {
        const currentEl = arrOfTree.shift();
        tempArr.push(currentEl.value);
        if (currentEl.left) {
            arrOfTree.push(currentEl.left);
        }
        if (currentEl.right) {
            arrOfTree.push(currentEl.right);
        }
        if (tempArr.length === Math.pow(2, count)) {
            tempResult.push(tempArr);
            tempArr = [];
            count += 1;
        }
        for (let i = 0; i < arrOfTree.length; i += 1) {
            repeat(arrOfTree[i]);
        }
        return tempResult;
    };
    return result();
};
