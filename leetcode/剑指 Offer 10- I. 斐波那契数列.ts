function fib(n: number): number {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1000000007;
  }
  return result[n] % 1000000007;
}
