function findMin(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const pivot = ((high + low) / 2) >> 0;
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }
  return nums[low];
}
