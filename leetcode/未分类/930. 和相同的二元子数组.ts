function numSubarraysWithSum(nums: number[], goal: number): number {
  let result = 0;

  for (let left = 0; left < nums.length; left++) {
    let sum = 0;

    let right = left;
    while (right < nums.length) {
      sum += nums[right];
      if (sum === goal) {
        result++;
      }
      right++;
    }
  }

  return result;
}
