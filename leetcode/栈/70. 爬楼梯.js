/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let results = {};

    for (let index = 1; index <= n; index++) {
        if (index <= 2) {
            results[index] = index;
        } else {
            results[index] = results[index - 1] + results[index - 2];
        }

    }

    return results[n];
};