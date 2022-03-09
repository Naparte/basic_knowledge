/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let counts = {};
    let result = [];
    let existObj = {};
    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = (counts[s[i]] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (!existObj[ch]) {
            while (result.length && result[result.length - 1] > ch) {
                if (counts[result[result.length - 1]]) {
                    existObj[result[result.length - 1]] = false;
                    result.pop();
                } else {
                    break;
                }
            }
            existObj[ch] = true;
            result.push(ch);

        }

        counts[ch]--;

    }

    return result.join('');
};