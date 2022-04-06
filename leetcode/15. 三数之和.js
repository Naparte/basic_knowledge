/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let result = [];
    let len = nums.length;

    let arr = nums.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < len; i++) {
        let a = arr[i];

        if (a > 0 || (i > 0 && nums[i] === nums[i - 1])) {
            continue;
        }

        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            let sum = a + arr[left] + arr[right]
            if (sum === 0) {
                result.push([a, arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) { left++ };
                while (left < right && arr[right] === arr[right - 1]) { right-- };
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }

        }

    }

    return result;

};