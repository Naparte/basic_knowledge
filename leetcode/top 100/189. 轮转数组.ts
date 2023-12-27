/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (nums.length < 2) {
    return;
  }
  k = k % nums.length;
  while (k) {
    nums.unshift(nums.pop() as number);
    k--;
  }
}
