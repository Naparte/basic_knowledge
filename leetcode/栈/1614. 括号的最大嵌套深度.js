/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let result = 0;
    let temp = [];
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        if (str === '(') {
            temp.push('(');
            result = result > temp.length ? result : temp.length;
        }
        if (str === ')') {
            temp.pop();
        }
    }
    return result;
};