function canJump(nums: number[]): boolean {
//   if (nums.length < 2) {
//     return true;
//   }
  let dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (!dp[i - 1]) {
      return false;
    }
    dp[i] = Math.max(dp[i - 1] - 1, nums[i]);
  }

  return true;
}
