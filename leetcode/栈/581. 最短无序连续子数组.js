/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {


    let arr = nums.map((item) => {
        return item;
    }).sort((a, b) => {
        return a - b;
    });
    let i = 0;
    let len = nums.length;
    let j = len - 1;

    while (i < j && len--) {

        if (arr[i] === nums[i]) {
            i++;
        }

        if (arr[j] === nums[j]) {
            j--;
        }

    }

    if (i === j) {
        return 0;
    }

    return nums.slice(i, j + 1).length;
};