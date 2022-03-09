/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0],
        max = nums[0],
        min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let curMax = Math.max(max * num, min * num, num);
        let curMin = Math.min(max * num, min * num, num);
        max = curMax;
        min = curMin;
        res = Math.max(curMax, res, num);
    }

    return res;
};