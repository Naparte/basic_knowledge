/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    let fn = function(strs) {
        let arr = [];
        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            if (str === '#') {
                arr.pop();
            } else {
                arr.push(str);
            }
        }
        return arr.join('');

    }
    return fn(s) === fn(t);
};