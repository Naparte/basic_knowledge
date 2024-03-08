function isHappy(n: number): boolean {
  let slow = n;
  let fast = getSumPow(n);

  while (fast !== 1 && fast !== slow) {
    slow = getSumPow(slow);
    fast = getSumPow(getSumPow(fast));
  }

  return fast === 1;
}

function getSumPow(n: number): number {
  return n
    .toString()
    .split("")
    .map((val) => Number(val) ** 2)
    .reduce((a, b) => a + b);
}
