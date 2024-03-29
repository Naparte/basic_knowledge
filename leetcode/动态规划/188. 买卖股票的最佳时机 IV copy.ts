var maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0;
  }

  const n = prices.length;
  k = Math.min(k, Math.floor(n / 2));
  const buy = new Array(k + 1).fill(-Number.MAX_VALUE);
  const sell = new Array(k + 1).fill(-Number.MAX_VALUE);

  [buy[0], sell[0]] = [-prices[0], 0];

  for (let i = 1; i < n; ++i) {
    buy[0] = Math.max(buy[0], sell[0] - prices[i]);
    for (let j = 1; j < k + 1; ++j) {
      buy[j] = Math.max(buy[j], sell[j] - prices[i]);
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i]);
    }
  }

  return Math.max(...sell);
};
