/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    if (preorder === '#') {
        return true;
    }


    let trees = preorder.split(',');
    let result = [];


    for (let i = 0; i < trees.length; i++) {
        const item = trees[i];
        if (item !== '#') {
            if (i !== 0 && !result.length) {
                return false;
            }
            result.push(item);
        } else {
            if (!result.length) {
                return false;
            } else {
                result.push('#');
                while (result.length > 2 && result[result.length - 1] === '#' && result[result.length - 2] === '#') {
                    result.pop();
                    result.pop();
                    result.pop();
                    if (!result.length) {
                        break;
                    }
                    result.push('#')
                }

            }
        }

    }


    return !result.length;
};