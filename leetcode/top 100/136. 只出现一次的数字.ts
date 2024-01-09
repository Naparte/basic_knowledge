function singleNumber(nums: number[]): number {
  return nums.reduce((calculate, val) => {
    return calculate ^ val;
  }, 0);
}
