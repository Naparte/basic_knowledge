function findDisappearedNumbers(nums: number[]): number[] {
  let result: number[] = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let x = (nums[i] - 1) % len;
    nums[x] += len;
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    num <= len && result.push(i + 1);
  }

  return result;
}
