function hammingDistance(x: number, y: number): number {
  let num = x ^ y;
  let ret = 0;
  while (num) {
    ret += num & 1;

    num = num >> 1;
  }
  return ret;
}
