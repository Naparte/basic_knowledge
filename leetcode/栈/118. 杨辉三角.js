/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [
        [1]
    ];
    if (numRows > 1) {
        for (let i = 1; i < numRows; i++) {
            let temp = [1];
            for (let j = 1; j < i; j++) {
                temp.push(result[i - 1][j - 1] + (result[i - 1][j] || 0));
            }
            temp.push(1);
            result.push(temp);
        }
    }
    return result;
};