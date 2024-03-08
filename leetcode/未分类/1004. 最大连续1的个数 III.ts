function longestOnes(nums: number[], k: number): number {
  let result = 0;
  let left = 0;
  let right = 0;
  let count = 0;
  while (left < nums.length) {
    if (nums[right]) {
      right++;
    } else if (count < k) {
      right++;
      count++;
    } else {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }

    if (right >= nums.length) {
      result = Math.max(result, right - left);
      if (nums[left] === 0) {
        count--;
      }
      left++;
      right = left;
    }
    result = Math.max(result, right - left);
  }

  return result;
}
