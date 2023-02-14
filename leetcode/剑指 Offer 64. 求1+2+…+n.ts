var sumNums = function(n: number): number {
  n && (n += sumNums(n - 1));
  return n;
};