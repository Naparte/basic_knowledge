/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let right = height.length - 1;
    let left = 0;

    while (left < right) {
        let l = height[left];
        let r = height[right];
        result = Math.max((right - left) * Math.min(l, r), result);

        if (l < r) {
            left++;
        } else {
            right--;
        }
    }

    return result;
};