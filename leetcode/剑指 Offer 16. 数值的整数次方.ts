function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n === -1) return 1 / x;

  let result = myPow(x, n >> 1);

  result *= result;
  if ((n & 1) === 1) {
    result *= x;
  }

  return result;
}
