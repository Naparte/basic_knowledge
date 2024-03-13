function minPathSum(grid: number[][]): number {
  let h = grid.length + 1;
  let w = grid[0].length + 1;

  let dp = new Array(h).fill(null).map(() => new Array(w).fill(Infinity));

  dp[1][0] = 0;
  dp[0][1] = 0;
  console.log(dp);

  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }

  return dp[h - 1][w - 1];
}
