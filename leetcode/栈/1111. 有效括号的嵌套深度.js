/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let stack1 = 0;
    let stack2 = 0;
    let result = [];

    let i = 0;
    while (i < seq.length) {

        let char = seq[i];
        if (char === '(') {
            if (stack1 > stack2) {
                stack2++;
                result.push(1);
            } else {
                stack1++;
                result.push(0);
            }
        } else {
            if (stack1 > stack2) {
                stack1--;
                result.push(0);
            } else {
                stack2--;
                result.push(1);
            }
        }

        i++;
    }

    return result;
};