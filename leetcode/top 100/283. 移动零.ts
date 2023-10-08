/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let point = 0;

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (item !== 0) {
      nums[point] = item;
      if (point !== i) {
        nums[i] = 0;
      }
      point++;
    } 
  }
}
