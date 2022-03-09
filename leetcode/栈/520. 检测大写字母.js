/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let ACode = 'A'.charCodeAt();
    let ZCode = 'Z'.charCodeAt();

    function isUpcase(str) {
        return str.charCodeAt() >= ACode && str.charCodeAt() <= ZCode;
    }

    for (let i = 1; i < word.length; i++) {
        let preStr = word[i - 1];
        if (!isUpcase(preStr) && isUpcase(word[i])) {
            return false;
        }

        if (isUpcase(preStr) && !isUpcase(word[i]) && i > 1) {
            return false;
        }

    }

    return true;
};