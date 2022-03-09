/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let j = i + 1;
        while (j !== i) {
            if (j > nums.length - 1) {
                j = 0;
            }
            if (j === i) {
                break;
            }
            if (nums[j] > num) {
                result.push(nums[j]);
                break;
            }
            j++;
        }

        if (result.length !== i + 1) {
            result.push(-1);
        }
    }

    return result;
};