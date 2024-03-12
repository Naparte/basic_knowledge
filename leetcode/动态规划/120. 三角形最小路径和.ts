function minimumTotal(triangle: number[][]): number {
  let h = triangle.length;
  let dp = new Array(h);

  for (let i = h - 1; i >= 0; i--) {
    let item = triangle[i];
    dp[i] = [];
    for (let j = 0; j < item.length; j++) {
      if (i === h - 1) {
        dp[i][j] = item[j];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + item[j];
      }
    }
  }

  return dp[0][0];
}

// 2
// 3 4
// 6 5 7
// 4 1 8 3
