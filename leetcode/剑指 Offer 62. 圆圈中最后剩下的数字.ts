function lastRemaining(n: number, m: number): number {
  let pos = 0; // 最终活下来那个人的初始位置
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i; // 每次循环右移
  }
  return pos;
}
