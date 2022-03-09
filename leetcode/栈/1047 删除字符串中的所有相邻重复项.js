/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let temp = s.split('');
    let flag = true;
    let arr = [];
    temp.forEach((val) => {
        if (arr.length && arr[arr.length - 1] === val) {
            arr.pop();
        } else {
            arr.push(val);
        }
    });
    return arr.join('');
};