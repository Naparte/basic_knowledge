/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s;
    }

    function isPalindrome(str) {
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i] != str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }


    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            let temp = s.substr(j, s.length - i);
            if (isPalindrome(temp)) {
                return temp;
            }
        }

    }
};