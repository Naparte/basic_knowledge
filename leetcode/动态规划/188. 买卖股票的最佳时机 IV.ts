function maxProfit(k: number, prices: number[]): number {
  if (!prices.length) {
    return 0;
  }
  let dp: number[][][] = new Array(prices.length).fill(null).map(() => {
    return new Array(k + 1).fill([-Number.MAX_VALUE, -Number.MAX_VALUE]);
  });

  [dp[0][0][0], dp[0][0][1]] = [0, -prices[0]];
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j][0];
      dp[i][j][1];
    }
  }

  let result: number[] = [];
  console.log(dp);

  for (let i = 0; i < k; i++) {
    result.push(dp[prices.length - 1][i][0]);
  }

  return Math.max(...result);
}
