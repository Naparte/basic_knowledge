/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let strArr = s.split('');
    let result = [];
    strArr.forEach((val, index) => {
        let preVal = result[result.length - 1] || '';
        if (preVal.toLowerCase() === val.toLowerCase() && val !== preVal) {
            result.pop();
        } else {
            result.push(val);
        }
    });

    return result.join('');
};