/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };

    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] > map[result[result.length - 1]]) {
            result.push(result.pop() + s[i])
        } else {
            result.push(s[i]);
        }
    }

    return result.reduce((cal, key) => {
        return cal += map[key] || 0;
    }, 0)

};