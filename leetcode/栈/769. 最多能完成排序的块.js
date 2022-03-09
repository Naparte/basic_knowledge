/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {

    let result = [];

    arr.forEach((val) => {
        if (!result.length || val > result[result.length - 1]) {
            result.push(val);
        }
    })

    return result.length;
};