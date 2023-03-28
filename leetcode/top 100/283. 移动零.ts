/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroNums = 0;
  let i = 0;
  while (i < nums.length && i + zeroNums < nums.length) {
    if (!nums[i + zeroNums]) {
      zeroNums++;
    } else {
      nums[i] = nums[i + zeroNums];
      i++;
    }
  }

  for (let j = nums.length - zeroNums; j < nums.length; j++) {
    nums[j] = 0;
  }
}
