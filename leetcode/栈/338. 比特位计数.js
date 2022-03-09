/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];

    function getBits(x) {
        let ones = 0;
        while (x > 0) {
            x &= (x - 1);
            ones++;
        }
        return ones;

    }
    for (let i = 0; i < n + 1; i++) {
        result.push(getBits(i));
    }
};