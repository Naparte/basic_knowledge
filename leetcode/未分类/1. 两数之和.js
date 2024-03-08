/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let ramainer = target - num;
        if (map.has(ramainer)) {
            return [map.get(ramainer), i];
        }
        map.set(num, i);
    }

    return [];
};