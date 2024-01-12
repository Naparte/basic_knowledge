function maxProfit(prices: number[]): number {
  if (!prices.length) {
    return 0;
  }

  let result = 0;

  let preMin = prices[0];
  for (let i = 1; i < prices.length; i++) {
    preMin = Math.min(preMin, prices[i - 1]);
    result = Math.max(prices[i] - preMin, result);
  }

  return result;
}
