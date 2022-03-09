/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i - 1] + nums[i], nums[i]);
    }

    return Math.max(...nums);
};