/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        let temp = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            temp[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(temp);
    }
    return result[rowIndex];

};