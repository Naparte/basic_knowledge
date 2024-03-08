function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right];
    console.log(left, right, sum, result);

    if (sum >= target) {
      result = result ? Math.min(result, right - left + 1) : right - left + 1;
      sum -= nums[left] + nums[right];
      left++;
    } else {
      right++;
    }
  }

  return result;
}
