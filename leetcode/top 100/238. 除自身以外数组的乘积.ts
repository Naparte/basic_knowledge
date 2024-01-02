function productExceptSelf(nums: number[]): number[] {
  let left: number[] = [];
  let right: number[] = [];
  let result: number[] = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      left.push(1);
      right[len - 1 - i] = 1;
    } else {
      left.push(left[i - 1] * nums[i - 1]);
      right[len - 1 - i] = right[len - i] * nums[len - i];
    }
  }

  nums.forEach((val, index) => {
    result.push(left[index] * right[index]);
  });

  return result;
}
