function searchInsert(nums: number[], target: number): number {
  if (!nums.length) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;
  while (left <= right) {
    let mid = ((left + right) / 2) | 0;

    if (nums[mid] >= target) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
}
