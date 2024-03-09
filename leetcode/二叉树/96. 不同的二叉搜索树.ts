function numTrees(n: number): number {
  let helper = new Array(n + 1).fill(0);

  helper[0] = 1;
  helper[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      helper[i] += helper[j - 1] * helper[i - j];
    }
  }

  return helper[n];
}
