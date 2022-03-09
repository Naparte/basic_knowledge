/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    return nums1.reduce((calcuate, val) => {
        let flag = false;
        let index = nums2.findIndex((v) => {
            return v === val;
        })
        for (let i = index; i < nums2.length; i++) {
            if (nums2[i] > val) {
                flag = nums2[i];
                break;
            }
        }
        calcuate.push(flag === false ? -1 : flag);
        return calcuate;
    }, [])
};