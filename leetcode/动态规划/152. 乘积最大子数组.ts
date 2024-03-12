function maxProduct(nums: number[]): number {
  let max = nums[0];

  let dp = [[max, max]];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i]),
      Math.min(dp[i - 1][1] * nums[i], dp[i - 1][0] * nums[i], nums[i]),
    ];
    res = Math.max(res, dp[i][0], dp[i][1]);
  }

  return res;
}
