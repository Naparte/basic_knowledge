/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let strs = path.split('/');
    let result = [];

    strs.forEach((str) => {
        if (str === '..') {
            result.pop();
        } else if (!['.', ''].includes(str)) {
            result.push('/' + str);
        }

    });
    return result.join('') || '/';
};