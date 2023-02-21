function maxSubArray(nums: number[]): number {
  let max = nums[0];

  let result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let val = nums[i];
    nums[i] = Math.max(nums[i - 1] + val, val);
    max = Math.max(nums[i], max);
  }

  return max;
}
