/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;

  for (let i = 2; i <=n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i]);
    }
  }

  return dp[n];
};
