/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tempStr = '';
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let index = tempStr.indexOf(char);
        if (index === -1) {
            tempStr += char;
            continue;
        }
        result = Math.max(result, tempStr.length);
        tempStr = tempStr.slice(index + 1) + char;

    }
    return Math.max(result, tempStr.length);
};