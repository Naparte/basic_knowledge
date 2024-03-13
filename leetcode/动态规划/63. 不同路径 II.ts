function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let h = obstacleGrid.length;
  let w = obstacleGrid[0].length;

  let dp: number[][] = [];
  for (let i = 0; i < h; i++) {
    dp[i] = [];
    for (let j = 0; j < w; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1 - obstacleGrid[i][j];

        if (
          (i === 0 && dp[i]?.[j - 1] === 0) ||
          (j === 0 && dp[i - 1]?.[j] === 0)
        ) {
          dp[i][j] = 0;
        }

        // dp[i][j] = dp[i - 1][j] ? 1 - obstacleGrid[i][j] : 0;
      } else {
        dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[h - 1][w - 1];
}
