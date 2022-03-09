/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let result = '';
    let num = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];

        if (+letter >= 0) {
            let nums = [letter];
            while (+s[i + 1] >= 0) {
                i++;
                nums.push(s[i]);
            }
            num = +nums.join('');

        } else if (letter === '[') {
            stack.push([num, result]);
            result = '';
        } else if (letter === ']') {
            let temp = stack.pop();
            result = temp[1] + new Array(temp[0]).fill(result).join('');
        } else {
            result += letter;
        }


    }

    return result;
};