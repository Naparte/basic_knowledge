function jump(nums: number[]): number {
  let n = nums.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = i;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[n - 1];
}
