/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let str = '';
    let num = 0;
    let map = {
        '(': 1,
        ')': -1
    };
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let temp = s[i]
        str += s[i];

        num += map[temp];
        if (str && !num) {
            arr.push(str);
            str = '';
        }
    }

    return arr.map((val) => {
        return val.slice(1, -1);
    }).join('');
};