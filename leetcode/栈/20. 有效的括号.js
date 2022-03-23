/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };


    let result = [];

    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        if (map[str]) {
            result.push(str);
        } else {
            if (map[result[result.length - 1]] !== str) {
                return false;
            }
            result.pop();
        }
    }

    return !result.length;
};